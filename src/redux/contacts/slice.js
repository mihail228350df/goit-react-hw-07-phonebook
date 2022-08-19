import { createSlice } from '@reduxjs/toolkit';
import { contactsDefault } from '../../baseContacts';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: contactsDefault,
    filter: '',
  },
  reducers: {
    chagneFilter(state, action) {
      state.filter = action.payload;
    },
    addContacts(state, action) {
      state.items.push(action.payload);
    },
    removeContacts(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

const persistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  whitelist: ['items'],
};

export const persistedReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { chagneFilter, addContacts, removeContacts } =
  contactsSlice.actions;

// Selectors

export const getContactsArray = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;