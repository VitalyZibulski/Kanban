import * as actionType from "./types";
import { api } from "../api";

export const addDesk = (desk) => ({ type: actionType.ADD_DESK, payload: { desk }});
export const removeDesk = (removeId) => ({ type: actionType.REMOVE_DESK, payload: { removeId }});
export const setDesks = (desks) => ({ type: actionType.SET_DESKS, payload: { desks }});

export const fetchDesks = () => (dispatch) => (
  api.getDesks()
    .then((desks) => {
      dispatch({ type: 'fetchDesksSuccess'});
      dispatch(setDesks(desks));
    })
    .catch(() => dispatch({ type: 'fetchDesksFail'}))
)

export const createDesk = (name) => (dispatch) => (
  api.createDesk(name)
    .then((doc) => {
      dispatch({ type: 'createDeskSuccess'});
      dispatch(addDesk({id: doc.id, ...doc.data() }));
    })
    .catch(() => dispatch({ type: 'createDeskFail'}))
)

export const deleteDesk = (id) => (dispatch) => (
  api.deleteDesk(id)
    .then(() => {
      dispatch({ type: 'deleteDeskSuccess'});
      dispatch(removeDesk(id));
    })
    .catch(() => dispatch({ type: 'deleteDeskFail'}))
)