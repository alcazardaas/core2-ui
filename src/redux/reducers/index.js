import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AccountsReducer from './accounts'
import PaymentsReducer from './payments'

export default combineReducers({
  router: routerReducer,
  accounts: AccountsReducer,
  payments: PaymentsReducer,
})
