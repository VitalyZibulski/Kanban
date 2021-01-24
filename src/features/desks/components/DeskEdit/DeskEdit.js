import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import CreateForm from "../../../../components/CreateForm/CreateForm";
import { editDesk } from "../../actions";
import { modes } from "../../../../components/CreateForm/hooks";

const DeskEdit = ({ id, name, onSubmit }) => {
    const dispatch = useDispatch();
    const editItem = useCallback((name) => dispatch(editDesk(id, name)).finally(onSubmit), [dispatch, id, onSubmit]);

    return (
      <CreateForm
        onSubmit={editItem}
        placeholder="desk name"
        actionTitle="Edit desk"
        initialValue={name}
        initialMode={modes.form}
        onCancel={onSubmit}
      />
    );
}

DeskEdit.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default memo(DeskEdit);
