import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDgiiHBTu8_sg0hUeQmIBJDn1aIJdaxcP0",
  authDomain: "disneyplus-clone-dde31.firebaseapp.com",
  projectId: "disneyplus-clone-dde31",
  storageBucket: "disneyplus-clone-dde31.appspot.com",
  messagingSenderId: "138820528811",
  appId: "1:138820528811:web:c408ff89b2cfda6f5465ee",
  measurementId: "G-SW0ZBVKFKX"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;