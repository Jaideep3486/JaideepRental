// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "jaideep-mern-auth.firebaseapp.com",
  projectId: "jaideep-mern-auth",
  storageBucket: "jaideep-mern-auth.appspot.com",
  messagingSenderId: "1007100911693",
  appId: "1:1007100911693:web:007a62ebc5849bb6b7bc04",
  measurementId: "G-ZPHC17R7RK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);