import {combineReducers} from 'redux';
import * as planetReducer from './planets';


export default combineReducers(Object.assign(
  planetReducer,
));