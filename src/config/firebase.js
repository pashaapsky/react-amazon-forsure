import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBIXSkBNjPu-TD7muhvtNR8IHG3rEDs4tY",
    authDomain: "react-cloning.firebaseapp.com",
    databaseURL: "https://react-cloning.firebaseio.com",
    projectId: "react-cloning",
    storageBucket: "react-cloning.appspot.com",
    messagingSenderId: "223505133046",
    appId: "1:223505133046:web:de62681fcb7413ef842bd7"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};