// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDS_p6QMRpQb_8cmvcc_mbY7HlphLbV8pk",
  authDomain: "citadel-of-the-believer.firebaseapp.com",
  databaseURL: "https://citadel-of-the-believer-default-rtdb.firebaseio.com",
  projectId: "citadel-of-the-believer",
  storageBucket: "citadel-of-the-believer.appspot.com",
  messagingSenderId: "733366659244",
  appId: "1:733366659244:web:f628766ba9cddb3794d709",
  measurementId: "G-26DP3EQG6L"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)