import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import {addColumn} from "../../actions/actions";
import { useRoute } from "react-router5";

import '../Column/Column.css';

const ColumnCreate = () => {
    const dispatch = useDispatch();
    const desks = useSelector((state) => state.desks);

    const { route: { params: { deskId } } } = useRoute();
    const desk = desks.find(({ id }) => id === deskId) || {};

    const createItem = (name) => (
        createColumn(name, desk.id)
          .then((doc) => dispatch(addColumn({ id: doc.id, ...doc.data() })))
          .catch(console.error)
    );

    return (
      <Div className="Column">
        <ColumnCreateForm onSubmit={createItem} />
      </Div>
    );
}

export default ColumnCreate;
