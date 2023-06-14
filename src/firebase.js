// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUXkS4B32R47Q562_ZTc9KiktGrbBKY1o",
  authDomain: "trading-43898.firebaseapp.com",
  projectId: "trading-43898",
  storageBucket: "trading-43898.appspot.com",
  messagingSenderId: "660356103241",
  appId: "1:660356103241:web:3021aaae484474bace1398",
  measurementId: "G-XZNENV08KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app