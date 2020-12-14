import firebase from "firebase/app";
import 'firebase/analytics';
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyASEnsAwJEVyja5okVqzeREhRtVnDWPaX0",
    authDomain: "kanban-42dc8.firebaseapp.com",
    projectId: "kanban-42dc8",
    storageBucket: "kanban-42dc8.appspot.com",
    messagingSenderId: "907029208239",
    appId: "1:907029208239:web:6162268fc32be93e24485a",
    measurementId: "G-42P9KFRKHQ"
  });
  firebase.analytics();
}