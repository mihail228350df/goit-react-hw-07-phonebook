import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62fc9edbb9e38585cd424199.mockapi.io';

export const getContactOperation = createAsyncThunk(
  'GET_CONTACTS',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContactOperation = createAsyncThunk(
  'ADD_CONTACT',
  async ({ name, number }) => {
    const response = await axios.post('/contacts', {
      name,
      phone: number,
    });
    return response.data;
  }
);

export const delContactOperation = createAsyncThunk('DEL_CONTACT', async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
});