import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';
import ColumnCard from "../ColumnCard/ColumnCard";
import { CardGrid, Div } from "@vkontakte/vkui";
import CardCreate from "../CardCreate/CardCreate";
import { fetchCards } from "../../actions";

import './Cards.css';
import { getCards } from "../../selectors/selectors";

const Cards = ({ columnId }) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  useEffect(() => {
    dispatch(fetchCards(columnId));
  }, [dispatch]);

    return (
      <Fragment>
        <CardGrid>
          {cards.map(({ id, name }) => <ColumnCard key={id} id={id}>{name}</ColumnCard>)}
        </CardGrid>
        <Div className="Cards__createButton">
          <CardCreate columnId={columnId} />
        </Div>
      </Fragment>
    );
}

Cards.propTypes = {
  columnId: PropTypes.string.isRequired,
}

export default Cards;
