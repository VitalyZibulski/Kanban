import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CreateForm from "../CreateForm/CreateForm";
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
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
        <CreateForm
          onSubmit={createItem}
          placeholder="column name"
          actionTitle="Create column"
        />
      </Div>
    );
}

export default ColumnCreate;
