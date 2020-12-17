import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ColumnCard from "../ColumnCard/ColumnCard";
import { CardGrid } from "@vkontakte/vkui";
import CardCreate from "../CardCreate/CardCreate";
import { getCards } from "../../actions";
import Context from "../App/context";

const Cards = ({ columnId }) => {
  const { cards, setCards } = useContext(Context);

  useEffect(() => {
    getCards(columnId).then(setCards)
  }, []);

    return (
      <CardGrid>
        {cards.map(({ id, name }) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
        <CardCreate columnId={columnId} />
      </CardGrid>
    );
}

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default Cards;
