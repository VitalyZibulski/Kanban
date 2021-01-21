import React, { useCallback, memo } from 'react';
import { useDispatch } from "react-redux";
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import { useRoute } from "react-router5";

import '../Column/Column.css';

const ColumnCreate = () => {
    const dispatch = useDispatch();
    const { route: { params: { deskId } } } = useRoute();
    const createItem = useCallback((name) => dispatch(createColumn(name, deskId)), [deskId, dispatch]);

    return (
      <Div className="Column">
        <ColumnCreateForm onSubmit={createItem} />
      </Div>
    );
}

export default memo(ColumnCreate);
