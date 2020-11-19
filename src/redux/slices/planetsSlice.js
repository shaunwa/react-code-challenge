/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { batch } from 'react-redux';
import getValuesTypes from '../../helpers/getValueTypes';

export const getPlanets = createAsyncThunk(
  'planets/getPlanets',
  async (endpoint, { dispatch }) => {
    // eslint-disable-next-line no-undef
    const response = await (await fetch(endpoint)).json();
    const { next, previous, results } = response;
    const types = getValuesTypes(results[0]);

    batch(() => {
      dispatch(setNextPage(next));
      dispatch(setPrevPage(previous));
      dispatch(setPlanets(results));
      dispatch(setValueTypes(types));
    });
  },
);

export const planetsSlice = createSlice({
  name: 'planets',
  initialState: {
    nextPage: null,
    prevPage: null,
    value: [],
    valueTypes: {},
    isLoading: false,
    error: null,
    isFormVisible: false,
  },
  reducers: {
    setNextPage: (state, action) => {
      state.nextPage = action.payload;
    },
    setPrevPage: (state, action) => {
      state.prevPage = action.payload;
    },
    setPlanets: (state, action) => {
      state.value = [...action.payload];
    },
    setValueTypes: (state, action) => {
      state.valueTypes = { ...action.payload };
    },
    setFormVisibility: (state, action) => {
      state.isFormVisible = action.payload;
    },
  },
  extraReducers: {
    [getPlanets.fulfilled]: (state) => ({
      ...state,
      isLoading: false,
    }),
    [getPlanets.pending]: (state) => ({
      ...state,
      isLoading: true,
    }),
    [getPlanets.rejected]: (state, action) => ({
      ...state,
      isLoading: true,
      error: action.payload,
    }),

  },
});

export const {
  setNextPage, setPrevPage, setPlanets, setValueTypes, setFormVisibility,
} = planetsSlice.actions;

export const selectPlanets = (state) => state.planets.value;
export const selectFormVisibility = (state) => state.planets.isFormVisible;
export const selectPrevPage = (state) => state.planets.prevPage;
export const selectNextPage = (state) => state.planets.nextPage;

export default planetsSlice.reducer;
