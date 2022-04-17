
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBB7ywNykRmXvHr2AWKMxNYslHfb4E80FM",
  authDomain: "doctor-room-authentication.firebaseapp.com",
  projectId: "doctor-room-authentication",
  storageBucket: "doctor-room-authentication.appspot.com",
  messagingSenderId: "443886520241",
  appId: "1:443886520241:web:2a182792d4b49b3bdedf90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;