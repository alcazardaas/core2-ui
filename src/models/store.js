import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { init } from "@rematch/core";
import * as models from './models';

import history from '../helpers/history'

const logger = createLogger({
  collapsed: true,
  duration: true,
  diff: true
})

const store = init(
  models,
  composeWithDevTools(
    /* logger must be the last middleware in chain to log actions */
    applyMiddleware(
      thunk,
      routerMiddleware(history),
      logger
    )
  )
)

export default store