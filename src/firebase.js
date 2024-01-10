import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyBod-wCTto0VOxf8ZxUUU49BLlCmzFA22k",
  authDomain: "techanalyticaltd-website.firebaseapp.com",
  databaseURL: "https://techanalyticaltd-website-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "techanalyticaltd-website",
  storageBucket: "techanalyticaltd-website.appspot.com",
  messagingSenderId: "778697482400",
  appId: "1:778697482400:web:bfb44dec8aac23d910a9c5",
  measurementId: "G-PLGZG70DFR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { firebase, db };
