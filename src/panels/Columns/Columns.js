import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {PanelHeaderSimple, Gallery, PanelHeaderBack} from "@vkontakte/vkui";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { getColumns } from "../../actions";

import './Columns.css';

const Columns = ({ goBack, setColumns, columns, removeColumn, addColumn, desk }) => {
  useEffect(() => {
        getColumns(desk.id).then(setColumns)
    }, []);

    return (
      <Fragment>
        <PanelHeaderSimple left={<PanelHeaderBack onClick={goBack} />}>Desk {desk.name}</PanelHeaderSimple>

        <Gallery
          className="Columns__list"
          slideWidth="100%"
          align="center"
          >
            {columns.map(({ id, name }) => <Column key={id} name={name} id={id} onDelete={removeColumn}/>)}
          <ColumnCreate deskId={desk.id} onCreate={addColumn}/>
        </Gallery>
      </Fragment>
    );
}

Columns.propTypes = {
  goBack: PropTypes.func.isRequired,
  setColumns: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    deskId: PropTypes.string.isRequired,
  })).isRequired,
  removeColumn: PropTypes.func.isRequired,
  addColumn: PropTypes.func.isRequired,
  desk: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Columns;
