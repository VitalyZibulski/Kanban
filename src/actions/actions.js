import { ADD_COLUMN, REMOVE_COLUMN, SET_COLUMNS } from './types';

export const addColumn = (column) => ({ type: ADD_COLUMN, payload: { column }});
export const removeColumn = (removeId) => ({ type: REMOVE_COLUMN, payload: { removeId }});
export const setColumns = (columns) => ({ type: SET_COLUMNS, payload: { columns }});