import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUserName = (userName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL,
    }).then((res) => console.log(res));
  };

  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      setLoading(false);
      console.log("user observing running", user);
    });
    return () => unsubscribe();
  }, []);

  const contextValue = {
    createUser,
    updateUserName,
    user,
    logIn,
    logOut,
    loading,
    googleLogin,
    githubLogin,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
