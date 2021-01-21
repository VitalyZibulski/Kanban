import React, { Fragment, memo, useState, useCallback} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { FixedLayout, Button, Div, Textarea } from "@vkontakte/vkui";
import { getId, getText } from "../../selectors";
import TextContent from "../TextContent/TextContent";
import { editCard } from "../../actions";

import './style.css';

const CardContent = () => {
  const dispatch = useDispatch();
  const text = useSelector(getText);
  const id = useSelector(getId);
  const [isEditableMode, setEditableMode] = useState(!text);
  const [value, setValue] = useState(text || '');
  const changeMode = useCallback(() => {
    if (isEditableMode && value.trim().length) {
      dispatch(editCard(id, { text: value }))
        .finally(() => setEditableMode(!isEditableMode));
    } else {
      setEditableMode(!isEditableMode)
    }
  }, [isEditableMode, value, dispatch, id]);
  const changeValue = useCallback(({ target: {value} }) => setValue(value), []);

  return (
      <Fragment>
        {isEditableMode ? (
          <Div>
            <Textarea value={value} onChange={changeValue} />
          </Div>
        ) : <TextContent />}

        <FixedLayout vertical="bottom">
          <Div>
            <Button mode="commerce" size="l" onClick={changeMode}>{isEditableMode ? 'Save' : 'Change'}</Button>
          </Div>
        </FixedLayout>
      </Fragment>
  )
};

export default memo(CardContent);
