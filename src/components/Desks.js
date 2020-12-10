import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";
import DeskList from "./DeskList";
import DeskCreate from "./DeskCreate";
import firebase from "firebase";

const Desks = ({ onChangePanel }) => {
  const [desks, setDesks] = useState([]);
  const addDesk = (desk) => setDesks([...desks, desk]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("desks").get().then((querySnapshot) => {
      const desks = [];
      querySnapshot.forEach((doc) => {
        desks.push({
          id: doc.id,
          name: doc.data().name,
        })
      });

      setDesks(desks);
    });
  }, []);

    return (
      <Fragment>
        <PanelHeaderSimple>My desks</PanelHeaderSimple>
        <Div>
          <DeskCreate onCreate={addDesk}/>
        </Div>

        <DeskList desks={desks}/>
      </Fragment>
    );
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
