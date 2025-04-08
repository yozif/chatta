import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi6QTZOBLufuEjhHjeIirp4hRo4WyNE0w",
  authDomain: "chatta-b8318.firebaseapp.com",
  projectId: "chatta-b8318",
  storageBucket: "chatta-b8318.firebasestorage.app",
  messagingSenderId: "974545093838",
  appId: "1:974545093838:web:465b3071ce852fa3fc3c9f",
  measurementId: "G-7YDWFCPJZ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);