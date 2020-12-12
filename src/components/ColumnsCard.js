import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {Div, Card} from "@vkontakte/vkui";
import './Columns.css';

const ColumnCard = ({children}) => {
  return (
    <Card size="l">
      <Div>{children}</Div>
    </Card>
  )
}

ColumnCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ColumnCard;
