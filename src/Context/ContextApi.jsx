import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// FireBase configuration

const FireBaseConf = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGE_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

const app = initializeApp(FireBaseConf);
const appAuth = getAuth(app);
const database = getFirestore(app);
const provider = new GoogleAuthProvider();

// Creating Context

export const Store = createContext({
  CreateUser: () => {},
  SignOutMethod: () => {},
  SignInwithGoogle: () => {},
  CurrentUser: {},
});

function ContextApi({ children }) {
  const [CurrentUser, setCurrentUser] = useState(null);
  // CREATING NEW USER
  const CreateUser = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(appAuth, email, password);
    } catch (error) {
      alert("plesae use another mail.");
      throw error;
    }
  };
  // SetCurrentUser

  useEffect(() => {
    const Unsubscribe = onAuthStateChanged(appAuth, (user) => {
      setCurrentUser(user);
    });
    return Unsubscribe;
  }, []);

  // Google Authentication

  const SignInwithGoogle = async () => {
    try {
      await signInWithPopup(appAuth, provider);
    } catch (error) {
      throw error;
    }
  };

  // Sign Out

  const SignOutMethod = async () => {
    try {
      await signOut(appAuth);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Store.Provider
      value={{
        CreateUser,
        CurrentUser,
        SignOutMethod,
        database,
        SignInwithGoogle,
      }}
    >
      {children}
    </Store.Provider>
  );
}

export default ContextApi;
