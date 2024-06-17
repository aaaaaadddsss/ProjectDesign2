import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCkSRXWZjiCRMFE1NKUgFdQBGg3-_rRkrc",
  authDomain: "projectdesign2.firebaseapp.com",
  databaseURL:
    "https://projectdesign2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "projectdesign2",
  storageBucket: "projectdesign2.appspot.com",
  messagingSenderId: "1015001457968",
  appId: "1:1015001457968:web:4035a8010302fa044894f5",
  measurementId: "G-GB51NMV21P",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
