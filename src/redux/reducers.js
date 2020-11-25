import { SET_PLANETS, SET_PLANET, SET_RF, SET_MODAL } from "./types";

const initialState = {
  planets: {},
  planet: {},
  RF: [],
  showModal: false,
};

export default function (state = initialState, action) {console.log(state,action)
  switch (action.type) {
    case SET_PLANETS:
      return {
        ...state,
        planets: action.payload,
      };

    case SET_PLANET:
      return {
        ...state,
        planet: action.payload,
      };

    case SET_RF:
      return {
        ...state,
        RF: action.payload,
      };

    case SET_MODAL:
      return {
        ...state,
        showModal: !state.showMoadal,
      };

    default:
      return {
        ...state,
        showMoadal : false
      };
  }
}
