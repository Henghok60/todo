import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiY2xNbmHao71NEMG1HV9Fi3SkzpH_FJ8",
  authDomain: "todo-af5ea.firebaseapp.com",
  projectId: "todo-af5ea",
  storageBucket: "todo-af5ea.appspot.com",
  messagingSenderId: "385924208780",
  appId: "1:385924208780:web:b780644567ddd7181943a9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
