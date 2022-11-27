// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCscp17aGRWwfJgJykgxirartIrCkSJZzQ",
  authDomain: "tienda-de-vinos-1f6f3.firebaseapp.com",
  projectId: "tienda-de-vinos-1f6f3",
  storageBucket: "tienda-de-vinos-1f6f3.appspot.com",
  messagingSenderId: "647842444630",
  appId: "1:647842444630:web:743854a662b121e4a512f7",
  measurementId: "G-5E6XL2X3E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Analytics = getAnalytics(app);



//Firestore
export const db = getFirestore(app);