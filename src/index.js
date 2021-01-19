import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './Store';
import {Login} from './Pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  
  document.getElementById('root')
);


