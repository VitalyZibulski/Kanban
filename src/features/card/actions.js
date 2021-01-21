import * as actionType from './types';
import { api } from "../../api";

const setCard = ({ id, name, text }) => ({
  type: actionType.SET_CARD,
  payload: { id, name, text },
});

const replaceCard = (id, data = {}) => ({ type: actionType.REPLACE_CARD, payload: data });

export const fetchCard = (cardId) => (dispatch) => (
  api.getCard(cardId)
    .then((card) => {
      dispatch({ type: actionType.FETCH_CARD_SUCCESS});
      dispatch(setCard(card));
    })
    .catch(() => dispatch({ type: actionType.FETCH_CARD_FAIL}))
)

export const editCard = (id, data) => (dispatch) => (
  api.editCard(id, data)
    .then(() => {
      dispatch({ type: actionType.EDIT_CARD_SUCCESS});
      dispatch(replaceCard(id, data));
    })
    .catch(() => dispatch({ type: actionType.EDIT_CARD_FAIL}))
)