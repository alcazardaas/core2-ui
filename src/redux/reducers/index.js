import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AccountsReducer from './accounts'

export default combineReducers({
  router: routerReducer,
  accounts: AccountsReducer,
})
