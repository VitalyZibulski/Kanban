import React from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { Div, Card } from "@vkontakte/vkui";
import { deleteCard } from "../../../cards/actions";

import './ColumnCard.css';

const ColumnCard = ({ children, id }) => {
  const dispatch = useDispatch();

  const deleteItem = () => dispatch(deleteCard(id));

  return (
    <Card size="l" mode="outline">
      <Div className="ColumnCard__wrapper">{children}</Div>
    </Card>
  )
}

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ColumnCard;
