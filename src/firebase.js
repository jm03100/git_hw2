// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxNqH0o23SQug0DXr2hkKQZe3_KRyshu4",
  authDomain: "homework2-5474f.firebaseapp.com",
  projectId: "homework2-5474f",
  storageBucket: "homework2-5474f.appspot.com",
  messagingSenderId: "1088572737400",
  appId: "1:1088572737400:web:3f82a2634cd751ea26aa8d",
  measurementId: "G-4SC9PE047X"
};

initializeApp(firebaseConfig);
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

export const db = getFirestore();