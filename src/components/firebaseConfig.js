// src/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// IMPORTANT: Replace with your actual config from the Firebase console
const firebaseConfig = {
  apiKey: "AIzaSyCEcDuPoGEPt0dsVlc_2WXSGWHq7xngbeQ",
  authDomain: "arti-web-daae5.firebaseapp.com",
  databaseURL: "https://arti-web-daae5-default-rtdb.firebaseio.com",
  projectId: "arti-web-daae5",
  storageBucket: "arti-web-daae5.appspot.com",
  messagingSenderId: "1005436300274",
  appId: "1:1005436300274:web:0f82adaae6d8847eb5996b",
  measurementId: "G-LS71VYVCYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export Firebase Storage
export const storage = getStorage(app);