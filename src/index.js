import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './index.css';
import App from './components/App';
import Film from './components/Film';
import Residents from './components/Residents';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Route exact path="/" component={App} />
        <Route exact  path="/planets/:id/films" component={Film} />
        <Route exact  path="/planets/:id/residents" component={Residents} />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
