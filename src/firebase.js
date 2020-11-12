import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEfk-rNEsIgF-DVixfGlpUC2gM0QsSPcM",
  authDomain: "e-learning-for-the-blind.firebaseapp.com",
  databaseURL: "https://e-learning-for-the-blind.firebaseio.com",
  projectId: "e-learning-for-the-blind",
  storageBucket: "e-learning-for-the-blind.appspot.com",
  messagingSenderId: "951751389103",
  appId: "1:951751389103:web:a04eaff44090988154095a",
  measurementId: "G-W7NCKTMJBG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
