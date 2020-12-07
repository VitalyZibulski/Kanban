import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from "@vkontakte/vkui";

const Desks = ({ onChangePanel }) => {
    return (
      <Fragment>
        <div>Hello, panel with desks</div>
        <Button onClick={onChangePanel}>Go to columns</Button>
      </Fragment>
    );
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
