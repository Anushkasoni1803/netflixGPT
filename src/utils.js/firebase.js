// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6AuEMkcpul-645oreFgsbJRS2AxKPPcc",
  authDomain: "netflixgpt-c9f17.firebaseapp.com",
  projectId: "netflixgpt-c9f17",
  storageBucket: "netflixgpt-c9f17.firebasestorage.app",
  messagingSenderId: "41138385861",
  appId: "1:41138385861:web:365c1df0643643d48191ac",
  measurementId: "G-FHYBV5H6WN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
