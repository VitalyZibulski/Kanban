import React from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Button } from "@vkontakte/vkui";
import { deleteCard } from "../../actions";

import './ColumnCard.css';

const ColumnCard = ({ children, id, onDelete }) => {
  const deleteItem = (id) => {
    deleteCard()
      .then(() => onDelete(id))
      .catch(console.error);
  };

  return (
    <Card size="l">
      <Div className="ColumnCard__wrapper">
        {children}
        <Button mode="destructive" onClick={deleteItem}>Delete</Button>
      </Div>
    </Card>
  )
}

ColumnCard.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ColumnCard;
