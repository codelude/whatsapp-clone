import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAS5e2ACUjVGPa8YKi4e_vrKiCNgS5jTrE",
  authDomain: "whats-app-clone-a468f.firebaseapp.com",
  databaseURL: "https://whats-app-clone-a468f.firebaseio.com",
  projectId: "whats-app-clone-a468f",
  storageBucket: "whats-app-clone-a468f.appspot.com",
  messagingSenderId: "844319625458",
  appId: "1:844319625458:web:4f812d95eea6ef58b0006b",
  measurementId: "G-0C37TNDDQ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
