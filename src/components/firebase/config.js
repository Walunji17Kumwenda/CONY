import app from "firebase/app";
import "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyDXZhPSRF0-0KElzElPA6ntZRIqjo1f93o",
    authDomain: "job-listing-ac3b5.firebaseapp.com",
    projectId: "job-listing-ac3b5",
    storageBucket: "job-listing-ac3b5.appspot.com",
    messagingSenderId: "125664987870",
    appId: "1:125664987870:web:6057a8499c900ce2ddd04f"
  };
  
  // Initialize Firebase
  const firebase =app. initializeApp(firebaseConfig);
  const firestore= firebase.firebase();

  export{firebase,firestore, app };