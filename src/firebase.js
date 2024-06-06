import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5MFkxn5k_owiKd96im44Fd2Ha9V4pCOI",
  authDomain: "rulo-3e98c.firebaseapp.com",
  projectId: "rulo-3e98c",
  storageBucket: "rulo-3e98c.appspot.com",
  messagingSenderId: "648785343244",
  appId: "1:648785343244:web:0494eb1fd6bd60f9fd0f29",
  measurementId: "G-M9K7X4ZQSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
