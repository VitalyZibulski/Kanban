import React from 'react';
import PropTypes from 'prop-types';
import firebase from "firebase/app";
import CreateForm from "../CreateForm/CreateForm";
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";

import '../Column/Column.css';

const ColumnCreate = ({ onCreate, deskId }) => {
    const createColumn = (name) => {
      const db = firebase.firestore();

      // return from back Promise
      return db.collection("columns")
        .add({ name, deskId })
        .then((docRef) => docRef.get())
        .then((doc) => onCreate({id: doc.id, ...doc.data() }))
        .catch(console.error);
    };

    return (
      <Div className="Column">
        <CreateForm
          onSubmit={createColumn}
          placeholder="column name"
          actionTitle="Create column"
        />
      </Div>
    );
}

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
}

export default ColumnCreate;
