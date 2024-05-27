// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDcIxsbWM7bmfM48WYbq6fYZW6PDFAGpKo",
  authDomain: "mbileclass.firebaseapp.com",
  projectId: "mbileclass",
  storageBucket: "mbileclass.appspot.com",
  messagingSenderId: "1044689862585",
  appId: "1:1044689862585:web:a56fc63786898277a1c068",
  measurementId: "G-1EFMH08CLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };