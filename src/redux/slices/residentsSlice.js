/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getResidents = createAsyncThunk(
  'residents/getResidents',
  async (endpoints, { dispatch }) => {
    const allPromises = endpoints.map(
      (url) => fetch(url).then((response) => response.json()),
    );
    const residents = await Promise.all(allPromises);
    dispatch(setResidents(residents));
  },
);

export const residentsSlice = createSlice({
  name: 'residents',
  initialState: {
    value: [],
    valueTypes: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setResidents: (state, action) => {
      state.value = [...action.payload];
    },
    setValueTypes: (state, action) => {
      state.valueTypes = { ...action.payload };
    },
  },
  extraReducers: {
    [getResidents.fulfilled]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getResidents.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getResidents.rejected]: (state, action) => ({
      ...state,
      isLoading: true,
      error: action.payload,
    }),

  },
});

export const { setResidents, setValueTypes } = residentsSlice.actions;

export const selectResidents = (state) => state.residents.value;

export default residentsSlice.reducer;
