import * as types from './types';
import Api from '../service/api';

function setPlanets(data) {
  return {
    type: types.GET_PLANETS,
    payload: data,
  };
}

// POST Request For Sign Up
export function getPlanets() {
  return dispatch => {
    Api.get('/api/planets/').then(resp => {
      dispatch(setPlanets(resp))
      })
      .catch(err => {
        console.log(err);
      });
  };
}
