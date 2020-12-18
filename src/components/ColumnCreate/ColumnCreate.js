import React, { useContext } from 'react';
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
import ColumnCreateForm from "./ColumnCreateForm";
import { createColumn } from "../../actions";
import Context from "../App/context";

import '../Column/Column.css';

const ColumnCreate = () => {
    const { addColumn, activeDesk } = useContext(Context);

    const createItem = (name) => (
        createColumn(name, activeDesk.id)
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
