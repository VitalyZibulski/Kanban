import React, { Fragment, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import {PanelHeaderSimple, Gallery, PanelHeaderBack} from "@vkontakte/vkui";
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { getColumns } from "../../actions";
import Context from "../../components/App/context";

import './Columns.css';

const Columns = () => {
  const { goToDesks, setColumns, columns, activeDesk } = useContext(Context);

  useEffect(() => {
        getColumns(activeDesk.id).then(setColumns)
    }, []);

    return (
      <Fragment>
        <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Desk {activeDesk.name}</PanelHeaderSimple>

        <Gallery
          className="Columns__list"
          slideWidth="85%"
          align="left"
          >
            {columns.map(({ id, name }) => <Column key={id} name={name} id={id} />)}
          <ColumnCreate />
        </Gallery>
      </Fragment>
    );
}

export default Columns;
