import * as types from './types';
import Api from '../service/api';

function setPlanets(data) {
  return {
    type: types.GET_PLANETS,
    payload: data,
  };
}

function setPlanet(data) {
  return {
    type: types.GET_PLANET,
    payload: data,
  };
}

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

export function getPlanet(id) {
  return dispatch => {
    Api.get(`/api/planets/${id}`).then(resp => {
      dispatch(setPlanet(resp))
      })
      .catch(err => {
        console.log(err);
      });
  };
}

