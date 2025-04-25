// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNGTms4Zf82dMutvFDIUtLpngbxv7kV6U",
  authDomain: "item-4e4b3.firebaseapp.com",
  projectId: "item-4e4b3",
  storageBucket: "item-4e4b3.firebasestorage.app",
  messagingSenderId: "215790262246",
  appId: "1:215790262246:web:071be296290875e2a2e827",
  measurementId: "G-6QWPM0YWR3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);