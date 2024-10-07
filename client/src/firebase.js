// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-b9a71.firebaseapp.com",
  projectId: "mern-blog-b9a71",
  storageBucket: "mern-blog-b9a71.appspot.com",
  messagingSenderId: "742605400691",
  appId: "1:742605400691:web:a9edc4b3f10c21f4e5d806"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);