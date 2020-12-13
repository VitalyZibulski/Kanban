import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase/app";
import CreateForm from "../CreateForm/CreateForm";

const CardCreate = ({ onCreate }) => {
    const createCard = (name) => {
      const db = firebase.firestore();

      // return from back Promise
      return db.collection("cards")
        .add({ name })
        .then((docRef) => docRef.get())
        .then((doc) => onCreate({id: doc.id, ...doc.data() }))
        .catch(console.error);
    };

    return (
      <CreateForm
        onSubmit={createCard}
        placeholder="card name"
        actionTitle="Create card"
      />
    );
}

CardCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default CardCreate;
