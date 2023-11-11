import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY!,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.FRIEBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.FIREBASE_APP_ID!,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID!,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC7Ju4HZ9moCd-f3LmnnrNxvwzmscI5eCE",
  authDomain: "saas-chatapplication.firebaseapp.com",
  projectId: "saas-chatapplication",
  storageBucket: "saas-chatapplication.appspot.com",
  messagingSenderId: "514604485669",
  appId: "1:514604485669:web:553aafced2eb45c32e83cc",
  measurementId: "G-KFMBL1HQLE",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { auth, db, functions };
