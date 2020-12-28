import { applyMiddleware, createStore } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const getStore = () => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
};