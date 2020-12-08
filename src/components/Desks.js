import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, PanelHeaderSimple } from "@vkontakte/vkui";
import DeskList from "./DeskList";

const Desks = ({ onChangePanel }) => {
    return (
      <Fragment>
        <PanelHeaderSimple>My desks</PanelHeaderSimple>
        <DeskList />
        {/*<div>Hello, panel with desks</div>*/}
        {/*<Button onClick={onChangePanel}>Go to columns</Button>*/}
      </Fragment>
    );
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
