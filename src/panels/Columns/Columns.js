import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {PanelHeaderSimple, Gallery, PanelHeaderBack} from "@vkontakte/vkui";
import { useRoute } from 'react-router5';
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { getColumns } from "../../api";
import { setColumns, setActivePanel } from "../../actions/actions";
import { pages } from "../../router";

import './Columns.css';

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.columns);
  const desks = useSelector((state) => state.desks);
  const goToDesks = () => dispatch(setActivePanel(pages.DESKS))

  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  useEffect(() => {
    if (desk.id) {
        getColumns(desk.id).then((columns) => dispatch(setColumns(columns)));
      }
    }, [desk]);

    return (
      <Fragment>
        <PanelHeaderSimple left={<PanelHeaderBack onClick={goToDesks} />}>Desk {desk.name ? desk.name : ''}</PanelHeaderSimple>

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
