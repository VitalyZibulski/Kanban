import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {PanelHeaderSimple, Gallery} from "@vkontakte/vkui";
import Column from "./Column";
import ColumnCreate from "./ColumnCreate";

import './Columns.css';
import firebase from "firebase";

const Columns = () => {
  const [columns, setColumns] = useState([]);
  const addColumn = (column) => setColumns([...columns, column]);
  const removeColumn = (removeId) => setColumns(columns.filter(({id}) => id !== removeId));

  useEffect(() => {
      const db = firebase.firestore();

      db.collection("columns").get().then((querySnapshot) => {
        const columns = [];
        querySnapshot.forEach((doc) => {
          const { deskId, name } = doc.data();
          columns.push({
            id: doc.id,
            deskId,
            name,
          })
        });

        setColumns(columns);
      });
    }, []);

    return (
      <Fragment>
        <PanelHeaderSimple>Desk</PanelHeaderSimple>

        <Gallery
          className="Columns__list"
          slideWidth="100%"
          align="center"
          >
            {columns.map(({ id, name }) => <Column key={id} name={name} id={id} onDelete={removeColumn}/>)}
          <ColumnCreate onCreate={addColumn}/>
        </Gallery>
      </Fragment>
    );
}

Columns.propTypes = {};

export default Columns;
