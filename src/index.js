import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './Store';
import Routes from './routes';
import './global.css';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  
  document.getElementById('root')
);


