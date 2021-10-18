import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAyiDsPUrkyxlD-ru7ll9WnuFtH3M-mOrg",
    authDomain: "messengerclonestage1.firebaseapp.com",
    projectId: "messengerclonestage1",
    storageBucket: "messengerclonestage1.appspot.com",
    messagingSenderId: "38097660805",
    appId: "1:38097660805:web:d19057806bf705dcdbb2ec",
    measurementId: "G-0JV9W88FJF"

});


const db = firebaseApp.firestore();

export default db;
