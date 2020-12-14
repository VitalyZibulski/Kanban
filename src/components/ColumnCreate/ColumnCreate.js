import React from 'react';
import PropTypes from 'prop-types';
import CreateForm from "../CreateForm/CreateForm";
import { Div } from "@vkontakte/vkui/dist/components/Div/Div";
import { createColumn } from "../../actions";

import '../Column/Column.css';

const ColumnCreate = ({ onCreate, deskId }) => {
    const createItem = (name) => {
        createColumn(name, deskId)
          .then((doc) => onCreate({id: doc.id, ...doc.data() }))
          .catch(console.error);
    };

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

ColumnCreate.propTypes = {
  onCreate: PropTypes.func.isRequired,
  deskId: PropTypes.string.isRequired,
}

export default ColumnCreate;
