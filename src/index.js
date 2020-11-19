import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/configureStore';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Routes from './routes';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes />
        <ToastContainer />
      </Router>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
