import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0ho1qU9lTGXdV2W6SQe_oBAJ6z9T7_Ts",
  authDomain: "reacttutorial-fa2f5.firebaseapp.com",
  projectId: "reacttutorial-fa2f5",
  storageBucket: "reacttutorial-fa2f5.firebasestorage.app",
  messagingSenderId: "894259631770",
  appId: "1:894259631770:web:9b8dbaeda86e670b793123",
  measurementId: "G-36GQ86EWRN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);