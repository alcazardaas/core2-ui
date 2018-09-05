import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from 'react-router-dom'

import history from './helpers/history'
import App from './App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store} >
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
