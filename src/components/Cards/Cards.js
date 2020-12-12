import React, { useEffect, useState } from 'react';
import ColumnCard from "./ColumnCard";
import {CardGrid} from "@vkontakte/vkui";
import firebase from "firebase";
import CardCreate from "./CardCreate";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const addCard = (card) => setCards([...cards, card]);
  const removeCard = (removeId) => setCards(cards.filter(({id}) => id !== removeId));

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("cards").get().then((querySnapshot) => {
      const cards = [];
      querySnapshot.forEach((doc) => {
        const { columnId, name } = doc.data();

        cards.push({
          id: doc.id,
          columnId,
          name,
        })
      });

      console.log(cards);

      setCards(cards);
    });
  }, []);

    return (
      <CardGrid>
        {cards.map(({ id, name }) => <ColumnCard key={id} id={id} onDelete={removeCard}>{name}</ColumnCard>)}
        <CardCreate onCreate={addCard}/>
      </CardGrid>
    );
}

export default Cards;
