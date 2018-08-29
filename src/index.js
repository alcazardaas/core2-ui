import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import store from './models/store'
// generate Redux store
/*const store = init({
  models,
});*/

ReactDOM.render(
  <Provider store={store} >
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)