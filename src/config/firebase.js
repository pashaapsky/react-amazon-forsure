import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBpR5L3iZG9u--N-SpDT9jEE2f8LGEd54w",
    authDomain: "react--forsure.firebaseapp.com",
    databaseURL: "https://react--forsure.firebaseio.com",
    projectId: "react--forsure",
    storageBucket: "react--forsure.appspot.com",
    messagingSenderId: "669910046634",
    appId: "1:669910046634:web:7a42dd54851a59d5edbdd3"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();


export {db, auth};