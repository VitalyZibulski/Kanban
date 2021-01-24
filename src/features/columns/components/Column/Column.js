import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { Div, Card, Header, Button, ActionSheet, ActionSheetItem, usePlatform, IOS } from "@vkontakte/vkui";
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';
import Cards from "../../../cards/components/Cards/Cards";
import { deleteColumn, editColumn } from "../../actions";
import { setPopout } from "../../../../app/actions";
import { useDispatch } from "react-redux";

import './Column.css';

const Column = ({ name, id }) => {
  const dispatch = useDispatch();
  const osname = usePlatform();

  const deleteItem = useCallback(() => dispatch(deleteColumn(id)), [dispatch, id]);
  const editItem = useCallback(() => {
      const newName = prompt('Add column name', name);

      if (typeof newName !== 'string' || !newName.trim().length) {
        return;
      }

      dispatch(editColumn(id, newName));
    },[dispatch, id, name]);

  const showColumnOptions = useCallback(() => {
        dispatch(setPopout((<ActionSheet onClose={() => dispatch(setPopout(null))}>
          <ActionSheetItem autoclose onClick={editItem}>Edit</ActionSheetItem>
          <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Delete</ActionSheetItem>
          {osname === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
        </ActionSheet>
      )))
    },[dispatch, deleteItem, osname, editItem]);

    return (
      <Div className="Column">
        <div className="Column__header">
          <Header className="Column__title">{name}</Header>
          <Button
            className="Column__headerButton"
            mode="overlay_outline"
            onClick={showColumnOptions}
          >
            <Icon16MoreHorizontal />
          </Button>
        </div>

        <Card className="Column__wrapper">
          <Cards columnId={id}/>
        </Card>
      </Div>
    );
}

Column.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default memo(Column);
