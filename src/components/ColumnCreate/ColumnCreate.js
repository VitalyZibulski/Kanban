import React, { useContext } from 'react';
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import Context from "../App/context";

import '../Column/Column.css';
import { useRoute } from "react-router5";

const ColumnCreate = () => {
    const { desks, addColumn } = useContext(Context);
    const { route: { params: { deskId } } } = useRoute();
    const desk = desks.find(({ id }) => id === deskId) || {};

    const createItem = (name) => (
        createColumn(name, desk.id)
          .then((doc) => addColumn({ id: doc.id, ...doc.data() }))
          .catch(console.error)
    );

    return (
      <Div className="Column">
        <ColumnCreateForm onSubmit={createItem} />
      </Div>
    );
}

export default ColumnCreate;
