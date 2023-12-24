// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdI6GlRQNaFrkA64KEpHF3Q17Td4m1Pew",
  authDomain: "street2-e8a7d.firebaseapp.com",
  projectId: "street2-e8a7d",
  storageBucket: "street2-e8a7d.appspot.com",
  messagingSenderId: "73403110937",
  appId: "1:73403110937:web:26038a48c5777fd7077c88",
  measurementId: "G-S9Z52Q2CVE"
};

// Initialize Firebase
export const   app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)

