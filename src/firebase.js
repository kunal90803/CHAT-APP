// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGq-ngLM6b8KD5yUgg_KzeR88pxLniINQ",
  authDomain: "chat-f5c58.firebaseapp.com",
  projectId: "chat-f5c58",
  storageBucket: "chat-f5c58.appspot.com",
  messagingSenderId: "352972610821",
  appId: "1:352972610821:web:affa29c5dff7542b282b6c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db = getFirestore();