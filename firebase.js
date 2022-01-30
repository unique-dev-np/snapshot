import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8JaIf5TLv0qT2ZghLul4QKqqoS8YK2WM",
  authDomain: "speedrun-64dbf.firebaseapp.com",
  projectId: "speedrun-64dbf",
  storageBucket: "speedrun-64dbf.appspot.com",
  messagingSenderId: "531907060811",
  appId: "1:531907060811:web:826388fb76031d285099ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

module.exports = {db,auth,provider}