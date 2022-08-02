// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//  apiKey: "AIzaSyArg2aWaCL8UClPaD2tXyeh1JJUrI9ZpoE",
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  //apiKey: "AIzaSyCjgUhvZSawQ-2ldLuOqNS4ZEc43zpNoD4",
  authDomain: "my-foodies-6512e.firebaseapp.com",
  projectId: "my-foodies-6512e",
  storageBucket: "my-foodies-6512e.appspot.com",
  messagingSenderId: "666775904506",
  appId: "1:666775904506:web:f4d036da05ac5eca262943"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () =>{
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  })
}