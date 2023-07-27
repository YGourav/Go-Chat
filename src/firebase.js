import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0lMDZmtB7pnbKLnRhuKccyfNjs-FPPM8",
  authDomain: "gochat-98e8a.firebaseapp.com",
  projectId: "gochat-98e8a",
  storageBucket: "gochat-98e8a.appspot.com",
  messagingSenderId: "660980124367",
  appId: "1:660980124367:web:c4b937c720085dbff045ba"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
