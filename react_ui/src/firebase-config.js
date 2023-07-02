// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8akZw8Cuol7VhwQlDZu_5HsGC0UTg1nI",
    authDomain: "floodbase-15dfb.firebaseapp.com",
    projectId: "floodbase-15dfb",
    storageBucket: "floodbase-15dfb.appspot.com",
    messagingSenderId: "560179560414",
    appId: "1:560179560414:web:11da8c8d2920e00fc8674f",
    measurementId: "G-WDEBFKVQE8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);

export default db;