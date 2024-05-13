// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "realstate-feea8.firebaseapp.com",
  projectId: "realstate-feea8",
  storageBucket: "realstate-feea8.appspot.com",
  messagingSenderId: "210262196045",
  appId: "1:210262196045:web:387a8aa9898f21cb260104",
  measurementId: "G-ZX7TMPMP14"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);