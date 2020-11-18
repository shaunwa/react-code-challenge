import createReducer from './createReducer';
import * as types from '../actions/types';

export const planets = createReducer(
  {},
  {
    [types.GET_PLANETS](state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
);
