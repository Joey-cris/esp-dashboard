// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDT5QnFbB94ZvqdzAMBg5cDwuAaGlLpMfY",
  authDomain: "capstone-esp-27.firebaseapp.com",
  databaseURL: "https://capstone-esp-27-default-rtdb.firebaseio.com",
  projectId: "capstone-esp-27",
  storageBucket: "capstone-esp-27.firebasestorage.app",
  messagingSenderId: "751014092494",
  appId: "1:751014092494:web:36ff0861653eec52d37a9f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);
