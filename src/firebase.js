import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDfeKqt9Uoh-r67Oo5gFUR9_FlIUKY1mmo",
    authDomain: "twitter-clone-37a12.firebaseapp.com",
    projectId: "twitter-clone-37a12",
    storageBucket: "twitter-clone-37a12.appspot.com",
    messagingSenderId: "718134574721",
    appId: "1:718134574721:web:c009d8cdd661a43d3d5780"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;