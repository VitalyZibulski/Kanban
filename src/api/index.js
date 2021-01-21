import firebase from "firebase/app";
import 'firebase/analytics';
import "firebase/auth";
import "firebase/firestore";

export const initialize = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyB_aTnYlSg-7y-ETw9mivl2RBttQFHHQ6U",
    authDomain: "kanban1-4fc07.firebaseapp.com",
    projectId: "kanban1-4fc07",
    storageBucket: "kanban1-4fc07.appspot.com",
    messagingSenderId: "929255171951",
    appId: "1:929255171951:web:1e497fb1510c5aa3366a9a"
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

const editDesk = (id, name) => {
  const db = firebase.firestore();

  return db.collection("desks").doc(id).update({ name });
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

const getCard = (cardId) => {
  const db = firebase.firestore();

  return db.collection("cards").doc(cardId).get()
    .then((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
};

// window.getCard = getCard;

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
  const db = firebase.firestore();

  return db.collection("columns")
    .add({ name, deskId })
    .then((docRef) => docRef.get())
}

export const api = {
  createDesk,
  editDesk,
  getDesks,
  deleteDesk,
  getColumns,
  deleteColumn,
  getCards,
  getCard,
  deleteCard,
  createCard,
  createColumn,
};