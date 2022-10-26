// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkn-Ww1a82maz2d7mSstMzfy7T6WaQPpw",
    authDomain: "assignment-authintiaction-app.firebaseapp.com",
    projectId: "assignment-authintiaction-app",
    storageBucket: "assignment-authintiaction-app.appspot.com",
    messagingSenderId: "59956459475",
    appId: "1:59956459475:web:803b725f1a18412d162126"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app