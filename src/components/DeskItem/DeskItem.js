import React from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from "@vkontakte/vkui";
import { deleteDesk } from "../../actions";

import './DeskItem.css';

const DeskItem = ({ id, children, onDelete, onClick }) => {
    const deleteItem = () => {
      deleteDesk(id)
        .then(() => onDelete(id))
        .catch(console.error);
    };

    return (
      <Card size="l" onClick={onClick}>
        <Div className="DeskItem__content">
          {children}
          <Button mode="destructive" onClick={deleteItem}>Delete</Button>
        </Div>
      </Card>
    );
}

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default DeskItem;
