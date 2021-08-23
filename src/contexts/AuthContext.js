import React, { useContext, useState, useEffect } from "react";
import { auth, googleAuthProvider,database } from "../firebase";


const AuthContext = React.createContext();

var clubs = [];
var events = [];

export function getEvents() {
  return events;
}

export function useAuth() {
  return useContext(AuthContext);
}


export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const [loginError, setLoginError] = useState("");

  function signUp(email, password) {
    auth.createUserWithEmailAndPassword(email, password);
  }

   function getUserId() {
        return auth.writeFileSync('uID.json'), JSON.stringify(auth.getUid());

    }

  function login(email, password) {
    auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function signInWithGoogle() {
    return auth.signInWithPopup(googleAuthProvider);
  }

  function checkLoggedIn() {
    var user = auth.currentUser;
    if (user) {
      // User is signed in.
      alert("yes");
    } else {
      // No user is signed in.
      alert("no");
    }
  }

    function saveUserData(user) {
        const ref = database.ref();
        const usersRef = ref.child('users')
        const dbuser = usersRef.child(user.uid);
        const exists = false;


        dbuser.get().then((snapshot) => {
            if (snapshot.exists()) {
                console.log("exists");
                const exists = true;
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });


        if (exists == false) {
            usersRef.child(user.uid).set({
                email: user.email,
                fullname: user.displayName,
                imgurl: user.photoURL,
                isAdmin: false,
                events: ref.child('/users').child(user.uid).child('events'),
                school: "missionsanjosehigh"
            });
        }
    }

  // get the event keys for a give user
  function getUserEventKeys(user) {

    console.log("Get event keys start");
    var keys = [];
    const ref = database.ref();

    // Loop through events in order with the forEach() method.
    var query = ref.child('/users').child(user.uid).child('events').orderByKey();
    ref.child('/users').child(user.uid).child('events').get("value")
        .then(function (snapshot) {
            if (snapshot.exists())
            {
                console.log("Snapshot exists");
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    console.log("User event key " + key);
                    keys.push(key);
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();
                    console.log("Is going " + childData.isGoing);
                    console.log("Member status " + childData.member_status);
                });
            }
            else
            {
                console.log("Snapshot does not exist");
            }
        });

    console.log("Total user event keys " + keys.length); // print total user event keys
    console.log("Get event keys end");
    return keys;
}

function getUserEventDetails(currentUser) {

    console.log("Get event details for a given user start");
    events = [];  // clear old events

    // get the event keys for the current users
    const userEventKeys = getUserEventKeys(currentUser);

    const ref = database.ref();

    // Loop through all school events and find out which even key match with the user 
    var query = ref.child('/schools').child('missionsanjosehigh').child('events').orderByKey();
    query.get("value")
        .then(function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                var key = childSnapshot.key;
                console.log(key);
                var found = userEventKeys.includes(key);  // chek if school event match with user event

                if (found == true) {
                    console.log("Key found for user event " + key)
                    // childData will be the actual contents of the child
                    var childData = childSnapshot.val();

                    console.log("Event name " + childData.event_name)

                    events.push({
                        club: childData.event_club,
                        event_name: childData.event_name,
                        date: childData.event_date,
                        desc: childData.event_description,
                        url: childData.event_image_url,
                        preview: childData.event_preview
                    });
                }
            });

            console.log("Total user event found " + events.length)
            
        });

    console.log("Get user event end");
}

function getAllClubKeys() {
        clubs = [];  // clear old clubs

        const ref = database.ref();
        console.log("All club keys")
        var query = ref.child('/schools').child('missionsanjosehigh').child('clubs').orderByKey(); //this is most important, how you actually get it
        query.get("value")
            .then(function (snapshot) {
                snapshot.forEach(function (childSnapshot) {
                    var key = childSnapshot.key;
                    var childData = childSnapshot.val();
                    console.log("club " + key);
                    console.log("Club name " + childData.club_name)
                });


            });

}



 

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user != null ) {
        if(user.email.indexOf("@fusdk12.net") != -1){
          //console.log(user);
          setCurrentUser(user);
          setLoading(false);
            getUserEventDetails(user);  // get the event details for a given user

            getAllClubKeys();
          saveUserData(user);
        } else {
          logout();
          setCurrentUser(null);
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    logout,
    getUserId,
    signInWithGoogle,
    checkLoggedIn
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
