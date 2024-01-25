import firebase from "firebase";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyANyWrXH5LZSMKuvgLV5-t7HzKgTBSMvac",
  authDomain: "disneyplus-clone-2024.firebaseapp.com",
  projectId: "disneyplus-clone-2024",
  storageBucket: "disneyplus-clone-2024.appspot.com",
  messagingSenderId: "177426049315",
  appId: "1:177426049315:web:9fe2506bc10810a5cd0496",
  measurementId: "G-7ELQSXGRZB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

// Import the functions you need from the SDKs you need


// Initialize Firebase