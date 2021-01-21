import { useState } from 'react';

export const modes = {
  button: 'button',
  form: 'form',
}

const statuses = {
  default: 'default',
  error: 'error',
}

export const useCreateForm = ({ initialMode = modes.button, initialValue = '', onSubmit, onCancel }) => {
  const [mode, setMode] = useState(initialMode);
  const [name, setName] = useState(initialValue);
  const [status, setStatus] = useState(statuses.default);
  const onChangeInput = (event) => setName(event.target.value);
  const isButtonMode = mode === modes.button;
  const reset = () => {
    onCancel && onCancel();
    setStatus(statuses.default);
    setMode(modes.button);
    setName('');
  }

  // if submitted return Promise
  const submit = (event) => {
    if (event) {
      event.preventDefault();
    }

    if (!name.trim().length) {
      setStatus(statuses.error);
      return;
    }

    onSubmit(name).then(reset)
  };

  const setFormMode = () => setMode(modes.form);
  const setButtonMode = () => setMode(modes.button);

  return {
    name,
    status,
    reset,
    submit,
    setButtonMode,
    setFormMode,
    onChangeInput,
    isButtonMode,
  };
};