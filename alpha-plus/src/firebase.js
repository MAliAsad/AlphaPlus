import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAWu58eTrih6Niszk-wg4nE9y0rT8pnZaM",
  authDomain: "alpha-plusss.firebaseapp.com",
  projectId: "alpha-plusss",
  storageBucket: "alpha-plusss.appspot.com",
  messagingSenderId: "936612978416",
  appId: "1:936612978416:web:1923d7cfd885ea5e626c35"
};
  // Initialize Firebase
const firebaseApp=  firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();
const provider=new firebase.auth.GoogleAuthProvider();
const storage=firebase.storage();

export {auth,provider,storage};
export default db;