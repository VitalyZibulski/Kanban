import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { Card, Div, Button } from "@vkontakte/vkui";
import { pages } from "../../../../router";
import { useRouter } from 'react-router5';

import { deleteDesk } from "../../actions";
import './DeskItem.css';
import { useDispatch } from "react-redux";

const DeskItem = ({ id, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();
    const goToColumnPanel = useCallback(() => router.navigate(pages.COLUMNS, { deskId: id }), [router, id]);
    const deleteItem = useCallback((event) => {
      event.stopPropagation();

      dispatch(deleteDesk(id));
    }, [dispatch, id]);

    return (
      <Card size="l" onClick={goToColumnPanel}>
        <Div className="DeskItem__content">
          {children}
          <Button mode="destructive" onClick={deleteItem}>Delete</Button>
        </Div>
      </Card>
    );
}

DeskItem.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]).isRequired,
};

export default memo(DeskItem);
