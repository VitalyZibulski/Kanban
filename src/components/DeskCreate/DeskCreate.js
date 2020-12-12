import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase/app";
import CreateForm from "./CreateForm";

const DeskCreate = ({ onCreate }) => {
    const createDesk = (name) => {
      const db = firebase.firestore();

      // return from back Promise
      return db.collection("desks")
        .add({ name })
        .then((docRef) => docRef.get())
        .then((doc) => onCreate({id: doc.id, ...doc.data() }))
        .catch(console.error);
    };

    return (
      <CreateForm
        onSubmit={createDesk}
        placeholder="desk name"
        actionTitle="Create desk"
      />
    );
}

DeskCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

export default DeskCreate;
