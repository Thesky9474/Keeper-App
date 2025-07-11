import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmYymjQzLhQG_qg0LBfn3V_kozZ1dl7ck",
  authDomain: "keeper-app-87dc8.firebaseapp.com",
  projectId: "keeper-app-87dc8",
  storageBucket: "keeper-app-87dc8.firebasestorage.app",
  messagingSenderId: "953986595550",
  appId: "1:953986595550:web:0099ed53f679ef7db0604f",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 
