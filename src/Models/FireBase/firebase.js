import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAf_ktKbxmE4TTEiQexZPPhRK3jFyzHGcU",
  authDomain: "video-call-86c8a.firebaseapp.com",
  projectId: "video-call-86c8a",
  storageBucket: "video-call-86c8a.appspot.com",
  messagingSenderId: "1055000459660",
  appId: "1:1055000459660:web:edd0e323d5cbe091c97ea9",
  measurementId: "G-B50BP3PP6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
