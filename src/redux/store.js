import { configureStore } from '@reduxjs/toolkit';
import { reducer as formFReducer } from 'redux-form';
import planetsReducer from './slices/planetsSlice';
import residentsReducer from './slices/residentsSlice';
import filmsReducer from './slices/filmsSlice';

export default configureStore({
  reducer: {
    planets: planetsReducer,
    residents: residentsReducer,
    films: filmsReducer,
    form: formFReducer,
  },
});
