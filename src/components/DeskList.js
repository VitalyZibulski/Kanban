import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import DeskItem from "./DeskItem";
import {CardGrid} from "@vkontakte/vkui";
import firebase from "firebase";

const desks = [
  { name: 'Desk 1' },
  { name: 'Desk 2' }
]

const DeskList = () => {
    const [desks, setDesks] = useState([]);

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


    if (!desks.length) {
      return null;
    }

    return (
        <CardGrid>
          {desks.map(({name}) => <DeskItem key={name}>{name}</DeskItem>)}
        </CardGrid>
    );
}

DeskList.propTypes = {};

export default DeskList;
