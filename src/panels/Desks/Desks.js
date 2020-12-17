import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { PanelHeaderSimple, Div } from "@vkontakte/vkui";
import DeskList from "../../components/DeskList/DeskList";
import DeskCreate from "../../components/DeskCreate/DeskCreate";

const Desks = ({ setDesks, desks }) => {
    return (
      <Fragment>
        <PanelHeaderSimple>My desks</PanelHeaderSimple>
        <Div><DeskCreate /></Div>

        <DeskList />
      </Fragment>
    );
}

export default Desks;
