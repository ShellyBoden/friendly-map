import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAtQ3ZeGH97y3goeSLVnAwrs5ZF3bHzemU",
  authDomain: "friendly-map-284707.firebaseapp.com",
  databaseURL: "https://friendly-map-284707-default-rtdb.firebaseio.com",
  projectId: "friendly-map-284707",
  storageBucket: "friendly-map-284707.appspot.com",
  messagingSenderId: "676252494838",
  appId: "1:676252494838:web:57361c84c6f126a68b75d7",
  measurementId: "G-6R32C7B6BF"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();