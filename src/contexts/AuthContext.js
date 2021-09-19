import React, { useContext, useState, useEffect } from "react";
import { auth, googleAuthProvider,database } from "../firebase";


const AuthContext = React.createContext();


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


    if (exists == false){
      usersRef.child(user.uid).set({
        email: user.email,
        fullname: user.displayName,
        imgurl: user.photoURL,
        isAdmin: false,
        school: "missionsanjosehigh"
      });
    } 
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user != null ) {
        if(user.email.indexOf("@fusdk12.net") != -1){
          //console.log(user);
          setCurrentUser(user);
          setLoading(false);
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
