// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5D-DXkvEmi_qJrN5vPKufxLLVjLDjRAo",
  authDomain: "news-comments-80d1a.firebaseapp.com",
  projectId: "news-comments-80d1a",
  storageBucket: "news-comments-80d1a.appspot.com",
  messagingSenderId: "886542766415",
  appId: "1:886542766415:web:12947e0c9f7fa0701eb53a"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);