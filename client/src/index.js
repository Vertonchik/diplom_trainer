import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './redux/configureStore';
import App from 'App';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/material.scss';
import 'styles/global.scss';
import 'styles/config.scss'

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

