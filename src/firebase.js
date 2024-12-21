// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDC7b2XkuraldhikueW14XVcKCwbhPAHzk",
  authDomain: "santosh-2baa0.firebaseapp.com",
  databaseURL: "https://santosh-2baa0-default-rtdb.firebaseio.com",
  projectId: "santosh-2baa0",
  storageBucket: "santosh-2baa0.firebasestorage.app",
  messagingSenderId: "574279936908",
  appId: "1:574279936908:web:444f8566a950ea62e704a9",
  measurementId: "G-JZHSDRZLBD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
