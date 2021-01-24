import React, { useCallback, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button, ActionSheet, ActionSheetItem, IOS, usePlatform } from "@vkontakte/vkui";
import { pages } from "../../../../router";
import { useRouter } from 'react-router5';
import { deleteDesk } from "../../actions";
import './DeskItem.css';
import { useDispatch } from "react-redux";
import Icon16MoreHorizontal from '@vkontakte/icons/dist/16/more_horizontal';
import { setPopout } from "../../../../app/actions";
import DeskEdit from "../DeskEdit/DeskEdit";

const DeskItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const osname = usePlatform();
  const router = useRouter();
  const [isEditableState, setEditableState] = useState(false);
    const goToColumnPanel = useCallback(() => router.navigate(pages.COLUMNS, { deskId: id }), [router, id]);
    const deleteItem = useCallback((event) => {
      event.stopPropagation();

      dispatch(deleteDesk(id));
    }, [dispatch, id]);

  const editItem = useCallback((event) => {
    event.stopPropagation();

    setEditableState(true);
  }, []);

  const onEditDesk = useCallback(() => {
    setEditableState(false);
  }, []);

  const showDeskOptions = useCallback((event) => {
    event.stopPropagation();

    dispatch(setPopout((<ActionSheet onClose={() => dispatch(setPopout(null))}>
        <ActionSheetItem autoclose onClick={editItem}>Edit</ActionSheetItem>
        <ActionSheetItem autoclose mode="destructive" onClick={deleteItem}>Delete</ActionSheetItem>
        {osname === IOS && <ActionSheetItem autoclose mode="cancel">Cancel</ActionSheetItem>}
      </ActionSheet>
    )))
  },[dispatch, deleteItem, osname, editItem]);

    if (isEditableState) {
      return <DeskEdit onSubmit={onEditDesk} id={id} name={children}/>
    }

    return (
      <Card size="l" onClick={goToColumnPanel}>
        <Div className="DeskItem__content">
          {children}
          <Button className="DeskItem__button" mode="outline" onClick={showDeskOptions}>
            <Icon16MoreHorizontal />
          </Button>
        </Div>
      </Card>
    );
}

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default memo(DeskItem);
