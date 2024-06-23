import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_ENDPOINT,
  authDomain: "video-call-86c8a.firebaseapp.com",
  projectId: "video-call-86c8a",
  storageBucket: "video-call-86c8a.appspot.com",
  messagingSenderId: "1055000459660",
  appId: "1:1055000459660:web:edd0e323d5cbe091c97ea9",
  measurementId: "G-B50BP3PP6S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

