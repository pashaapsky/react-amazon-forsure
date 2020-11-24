import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDwg8lIvdPX78pRov32-uphHgiU4B-dQBE",
    authDomain: "react-b1494.firebaseapp.com",
    databaseURL: "https://react-b1494.firebaseio.com",
    projectId: "react-b1494",
    storageBucket: "react-b1494.appspot.com",
    messagingSenderId: "350804153400",
    appId: "1:350804153400:web:dfebdf7cda3338c3fd82cd"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};