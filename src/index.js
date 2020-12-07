import "core-js/features/map";
import "core-js/features/set";
import React from "react";
import ReactDOM from "react-dom";
// import bridge from "@vkontakte/vk-bridge";
import App from "./components/App";
import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import 'firebase/analytics'

var firebaseConfig = {
  apiKey: "AIzaSyASEnsAwJEVyja5okVqzeREhRtVnDWPaX0",
  authDomain: "kanban-42dc8.firebaseapp.com",
  projectId: "kanban-42dc8",
  storageBucket: "kanban-42dc8.appspot.com",
  messagingSenderId: "907029208239",
  appId: "1:907029208239:web:6162268fc32be93e24485a",
  measurementId: "G-42P9KFRKHQ"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

// Init VK  Mini App
// bridge.send("VKWebAppInit");

// const db = firebase.firestore();
// db.collection("desks").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(doc.id, doc.data());
//   });
// });


ReactDOM.render(<App />, document.getElementById("root"));
