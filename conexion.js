// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLBS7FETxXbEhAh3utJhweD53GZNc-WuM",
  authDomain: "del-jardin-granja-avicola.firebaseapp.com",
  projectId: "del-jardin-granja-avicola",
  storageBucket: "del-jardin-granja-avicola.firebasestorage.app",
  messagingSenderId: "100413159933",
  appId: "1:100413159933:web:f41ecd2131235e75d68194",
  measurementId: "G-DDK98K0577"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);