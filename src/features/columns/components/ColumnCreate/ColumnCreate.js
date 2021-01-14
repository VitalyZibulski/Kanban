import React, { useMemo, useCallback, memo } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import { useRoute } from "react-router5";

import '../Column/Column.css';
import { getDesks } from "../../../desks/selectors";

const ColumnCreate = () => {
    const dispatch = useDispatch();
    const desks = useSelector(getDesks);

    const { route: { params: { deskId } } } = useRoute();
    const desk = useMemo(() => desks.find(({ id }) => id === deskId) || {}, [deskId, desks]);

    const createItem = useCallback((name) => dispatch(createColumn(name, desk.id)), [desk, dispatch]);

    return (
      <Div className="Column">
        <ColumnCreateForm onSubmit={createItem} />
      </Div>
    );
}

export default memo(ColumnCreate);
