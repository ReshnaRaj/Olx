import firebase from 'firebase';
import 'firebase/auth' 
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB4SjSbhTWWa9YGDtTln5YvLhD95KVJWwc",
    authDomain: "olx-demo-25473.firebaseapp.com",
    projectId: "olx-demo-25473",
    storageBucket: "olx-demo-25473.appspot.com",
    messagingSenderId: "467346908622",
    appId: "1:467346908622:web:1b62c04595da65bad5f79f",
    measurementId: "G-DL9X5RQTV0"
  };
export  default firebase.initializeApp(firebaseConfig)