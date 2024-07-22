import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0LGKfT3SJq4aSWSj0biLp3pBAFzsryyQ",
  authDomain: "personal-site-d1063.firebaseapp.com",
  projectId: "personal-site-d1063",
  storageBucket: "personal-site-d1063.appspot.com",
  messagingSenderId: "55905191484",
  appId: "1:55905191484:web:59c455a2c2b8b99c69a539",
  measurementId: "G-W6JCHKHSRR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export default firebaseConfig;
export {app, auth, analytics, db}