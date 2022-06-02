// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_YeWlgTr4QZUjvRrg5HIIRQvXO1YMeJA",
  authDomain: "deploy-ingress.firebaseapp.com",
  projectId: "deploy-ingress",
  storageBucket: "deploy-ingress.appspot.com",
  messagingSenderId: "450560585913",
  appId: "1:450560585913:web:a3aa7e1e60fa262d416b68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
