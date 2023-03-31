// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPeEZXsa7aZbdrWDX68-Vg3oYv-Z646sc",
  authDomain: "boiler-plate-b78f4.firebaseapp.com",
  databaseURL: "https://boiler-plate-b78f4-default-rtdb.firebaseio.com",
  projectId: "boiler-plate-b78f4",
  storageBucket: "boiler-plate-b78f4.appspot.com",
  messagingSenderId: "242771428",
  appId: "1:242771428:web:5efbbfd54b7f4f8bbdd3f1",
  measurementId: "G-YCQNSCLW0R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default  app;