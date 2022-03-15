// Import the functions you need from the SDKs you nee
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK9EiaxWo3h7nHIhYFWQI9lBYNkCSf_aw",
  authDomain: "tiktokclone-7d9e0.firebaseapp.com",
  projectId: "tiktokclone-7d9e0",
  storageBucket: "tiktokclone-7d9e0.appspot.com",
  messagingSenderId: "420717102064",
  appId: "1:420717102064:web:819cab626f617d502dd335"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db);

export default db;