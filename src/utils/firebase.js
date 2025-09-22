// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8vZXHWoNCsqfqTr8QC_sE6EUHx06a148",
  authDomain: "netflixgpt-82f87.firebaseapp.com",
  projectId: "netflixgpt-82f87",
  storageBucket: "netflixgpt-82f87.firebasestorage.app",
  messagingSenderId: "971713350086",
  appId: "1:971713350086:web:19adddec6efe7defa78ac7",
  measurementId: "G-688XXNPXBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();