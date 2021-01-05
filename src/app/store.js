import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import app from '../app/reducer';
import desks from '../features/desks/reducer';
import columns from '../features/columns/reducer';
import cards from '../features/cards/reducer';
import card from '../features/card/reducer';

const reducer = combineReducers({
  app,
  desks,
  columns,
  cards,
  card,
});

export const getStore = () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
};