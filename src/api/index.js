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

const createDesk = (name) => {
  const db = firebase.firestore();

  // query to server always Promise
  return db.collection("desks")
    .add({ name })
    .then((docRef) => docRef.get())
}

const getDesks = () => {
  const db = firebase.firestore();

  return db.collection("desks").get()
    .then((querySnapshot) => {
      const desks = [];

      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        });
      });

      return desks;
    });
}

const deleteDesk = (id) => {
  const db = firebase.firestore();

  return db.collection("desks")
    .doc(id)
    .delete();
}

const getColumns = (deskId) => {
  const db = firebase.firestore();

  return db.collection("columns").where('deskId', '==', deskId).get()
    .then((querySnapshot) => {
      const columns = [];
      querySnapshot.forEach((doc) => {
        const { deskId, name } = doc.data();
        columns.push({
          id: doc.id,
          deskId,
          name,
        })
      });

      return columns;
    });
}

const deleteColumn = (id) => {
  const db = firebase.firestore();

  return db.collection("columns")
    .doc(id)
    .delete()
}

const getCards = (columnId) => {
  console.log('columnId', columnId);
  const db = firebase.firestore();

  return db.collection("cards").where('columnId', '==', columnId).get()
    .then((querySnapshot) => {
      const cards = [];

      querySnapshot.forEach((doc) => {
        const {columnId, name} = doc.data();

        cards.push({
          id: doc.id,
          columnId,
          name,
        })
      });

      return cards;
    });
}

const deleteCard = (id) => {
  const db = firebase.firestore();

  return db.collection("cards")
    .doc(id)
    .delete()
}

const createCard = (name, columnId) => {
  const db = firebase.firestore();

  return db.collection("cards")
    .add({ name, columnId })
    .then((docRef) => docRef.get())
}

const createColumn = (name, deskId) => {
  console.log(deskId, 'deskd');
  const db = firebase.firestore();

  return db.collection("columns")
    .add({ name, deskId })
    .then((docRef) => docRef.get())
}

export const api = {
  createDesk,
  getDesks,
  deleteDesk,
  getColumns,
  deleteColumn,
  getCards,
  deleteCard,
  createCard,
  createColumn,
};