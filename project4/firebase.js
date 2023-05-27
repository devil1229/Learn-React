// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCJhs1Fs_aRvSmYr3Z_tJDvjXIi10Qcxxc",
  authDomain: "react-notes-f201b.firebaseapp.com",
  projectId: "react-notes-f201b",
  storageBucket: "react-notes-f201b.appspot.com",
  messagingSenderId: "631980983175",
  appId: "1:631980983175:web:782d4c506a0f6d57024922"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")