import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCVx_iDBqpHmWKYoGKwP1a913p81gAGtAE",
  authDomain: "tinder-clone-7ff6e.firebaseapp.com",
  projectId: "tinder-clone-7ff6e",
  storageBucket: "tinder-clone-7ff6e.appspot.com",
  messagingSenderId: "371781685503",
  appId: "1:371781685503:web:e9c529c5de51a270543cca",
  measurementId: "G-P8G140FZYV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
