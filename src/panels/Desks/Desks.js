import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

const Desks = ({ onChangePanel, setDesks, addDesk, removeDesk, desks }) => {

    return (
      <Fragment>
        <PanelHeaderSimple>My desks</PanelHeaderSimple>
        <Div>
          <DeskCreate onCreate={addDesk}/>
        </Div>

        <DeskList desks={desks} onDelete={removeDesk} onLoadDesks={setDesks} onDeskClick={onChangePanel}/>
      </Fragment>
    );
}

Desks.propTypes = {
  onChangePanel: PropTypes.func.isRequired,
};

export default Desks;
