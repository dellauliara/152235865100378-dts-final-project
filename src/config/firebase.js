// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArg2aWaCL8UClPaD2tXyeh1JJUrI9ZpoE",
  //apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "my-movie-dellauliara.firebaseapp.com",
  projectId: "my-movie-dellauliara",
  storageBucket: "my-movie-dellauliara.appspot.com",
  messagingSenderId: "789336341855",
  appId: "1:789336341855:web:fb9d8994ad00498d584aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
