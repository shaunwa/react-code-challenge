/* eslint-disable no-undef */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getFilms = createAsyncThunk(
  'films/getFilms',
  async (endpoints, { dispatch }) => {
    const allPromises = endpoints.map(
      (url) => fetch(url).then((response) => response.json()),
    );
    const films = await Promise.all(allPromises);
    dispatch(setFilms(films));
  },
);

export const filmsSlice = createSlice({
  name: 'films',
  initialState: {
    value: [],
    valueTypes: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    setFilms: (state, action) => {
      state.value = [...action.payload];
    },
    setValueTypes: (state, action) => {
      state.valueTypes = { ...action.payload };
    },
  },
  extraReducers: {
    [getFilms.fulfilled]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getFilms.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getFilms.rejected]: (state, action) => ({
      ...state,
      isLoading: true,
      error: action.payload,
    }),

  },
});

export const { setFilms, setValueTypes } = filmsSlice.actions;

export const selectFilms = (state) => state.films.value;

export default filmsSlice.reducer;
