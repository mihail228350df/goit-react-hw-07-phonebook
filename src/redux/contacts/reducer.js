import { combineReducers, createReducer } from '@reduxjs/toolkit';
import {
  getContactOperation,
  addContactOperation,
  delContactOperation,
} from './operations';
import { filter } from './actions';

const itemsReducer = createReducer([], {
  [getContactOperation.fulfilled]: (_, action) => action.payload,
  [addContactOperation.fulfilled]: (state, action) => [
    action.payload,
    ...state,
  ],
  [delContactOperation.fulfilled]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

const filterReducer = createReducer('', {
  [filter]: (_, action) => action.payload,
});

export const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});