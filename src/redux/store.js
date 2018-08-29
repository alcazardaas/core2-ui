import { applyMiddleware } from 'redux'
import { init } from "@rematch/core";
import * as models from './models/models';
import { routerMiddleware } from 'react-router-redux'
import thunk from "redux-thunk";


import history from '../helpers/history'

// generate Redux store
const store = init({
  models,
});

export default store
