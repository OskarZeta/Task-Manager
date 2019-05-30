import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import setStore from './redux/store';
import App from './containers/app.js';
import './css/style.css';

const store = setStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
