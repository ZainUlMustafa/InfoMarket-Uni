import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import functions from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyBjvfP3CtT2cGX9E63_eiG5Jw3wjvWtzgo",
  authDomain: "infomarket-uni.firebaseapp.com",
  projectId: "infomarket-uni",
  storageBucket: "infomarket-uni.appspot.com",
  messagingSenderId: "36237262299",
  appId: "1:36237262299:web:9bc6eba7ae932b0b3d3bfe",
  measurementId: "G-91SXS20Q2D"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const cloudFunction = firebase.functions();


export { storage, cloudFunction, firebase as default };