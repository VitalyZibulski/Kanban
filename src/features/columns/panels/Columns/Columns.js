import React, { Fragment, useEffect, useCallback, memo } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { PanelHeaderSimple, Gallery, PanelHeaderBack } from "@vkontakte/vkui";
import { useRoute } from 'react-router5';
import Column from "../../components/Column/Column";
import ColumnCreate from "../../components/ColumnCreate/ColumnCreate";
import { fetchColumns } from "../../actions";
import { getColumns } from "../../selectors";
import { getDesks } from "../../../desks/selectors";
import { goBack } from "../../../../app/actions";

import './Columns.css';

const Columns = () => {
  const dispatch = useDispatch();
  const columns = useSelector(getColumns);
  const desks = useSelector(getDesks);
  const goToDesks = useCallback(() => dispatch(goBack()), [dispatch]);

  const { route: { params: { deskId } } } = useRoute();
  const desk = desks.find(({ id }) => id === deskId) || {};

  useEffect(() => {
    dispatch(fetchColumns(deskId));
    }, [dispatch, deskId]);

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

export default memo(Columns);
