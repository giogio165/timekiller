import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAu1biV8U3PG1muLsg-hfCAJyOMf_dlb0k",
  authDomain: "watcha-clone-53248.firebaseapp.com",
  projectId: "watcha-clone-53248",
  storageBucket: "watcha-clone-53248.appspot.com",
  messagingSenderId: "273183934469",
  appId: "1:273183934469:web:5f4fc4ec215f58a583746c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  app,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
