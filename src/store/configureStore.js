import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

/* eslint-disable */
function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(
      thunk,
      ),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  return store;
}
const store = configureStore({test: 'testing'});

export default store;
