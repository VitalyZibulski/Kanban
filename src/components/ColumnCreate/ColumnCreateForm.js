import React from 'react';
import PropTypes from 'prop-types';
import {Button, Card, FormLayout, Input} from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import { useCreateForm } from "../CreateForm/hooks";

const ColumnCreateForm = ({ onSubmit }) => {
  const {
    name,
    status,
    reset,
    submit,
    setFormMode,
    onChangeInput,
    isButtonMode
  } = useCreateForm({ onSubmit });

  if (isButtonMode) {
    return (
      <Button
        onClick={setFormMode}
        before={<Icon24Add />}
        size="xl"
        mode="overlay_secondary"
      >
        Add column
      </Button>
    )
  }

  return (
    <Card size="l" mode="shadow">
      <FormLayout onSubmit={submit}>
        <Input
          autoFocus
          value={name}
          onChange={onChangeInput}
          status={status}
          placeholder="column name"
        />
        <div>
          <Button onClick={submit}>Add</Button>
          <Button onClick={reset} mode="tertiary">Cancel</Button>
        </div>
      </FormLayout>
    </Card>
  );
}


ColumnCreateForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default ColumnCreateForm;
