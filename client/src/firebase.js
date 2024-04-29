// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "yougram1.firebaseapp.com",
  projectId: "yougram1",
  storageBucket: "yougram1.appspot.com",
  messagingSenderId: "737863337757",
  appId: "1:737863337757:web:9a51327dcd57f433eb03f4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;