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

  function saveUserData() {
    const ref = database.ref();
    const usersRef = ref.child('users');
    usersRef.child('alanisawesome').set({
      date_of_birth: 'June 23, 1912',
      full_name: 'Alan Turing'
    });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if(user != null ) {
        if(user.email.indexOf("@fusdk12.net") != -1){
          setCurrentUser(user);
          setLoading(false);
          saveUserData();
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
    signInWithGoogle,
    checkLoggedIn
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
