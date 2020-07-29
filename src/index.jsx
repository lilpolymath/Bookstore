import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
// put base URL here = http://5a1e7422da13.ngrok.io/
// Refer to http://5a1e7422da13.ngrok.io/docs to better fix the API calls.
 axios.defaults.baseURL = 'http://5a1e7422da13.ngrok.io/';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
