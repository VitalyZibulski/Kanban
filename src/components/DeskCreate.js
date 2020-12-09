import React, { useState } from 'react';
import {Button, Card, FormLayout, Input} from "@vkontakte/vkui";
import Icon24Add from '@vkontakte/icons/dist/24/add';
import firebase from "firebase/app";

const modes = {
  button: 'button',
  form: 'form',
}

const statuses = {
  default: 'default',
  error: 'error',
}

const DeskCreate = () => {
    const [mode, setMode] = useState(modes.button);
    const [name, setName] = useState('');
    const [status, setStatus] = useState(statuses.default);
    const reset = () => {
      setStatus(statuses.default);
      setMode(modes.button);
      setName('');
    }
    const createDesk = (event) => {
      if (event) {
        event.preventDefault();
      }

      if (!name.trim().length) {
        setStatus(statuses.error);
        return;
      }

      const db = firebase.firestore();

      db.collection("desks").doc()
        .set({ name })
        .then(reset)
        .catch(console.error);
    };

    if (mode === modes.button) {
      return (
        <Button
          onClick={() => setMode(modes.form)}
          before={<Icon24Add />}
          size="xl"
        >
          Create desk
        </Button>
      )
    }

    return (
      <Card size="l" mode="shadow">
        <FormLayout onSubmit={createDesk}>
          <Input
            autoFocus
            value={name}
            onChange={(event) => setName(event.target.value)}
            status={status}
            placeholder="desk name"
          />
          <div>
            <Button onClick={createDesk}>Create desk</Button>
            <Button onClick={reset} mode="tertiary">Cancel</Button>
          </div>
        </FormLayout>
      </Card>
    );
}

export default DeskCreate;
