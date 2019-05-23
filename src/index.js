import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import setStore from './redux/store';
import App from './components/app.js';

const store = setStore();

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
