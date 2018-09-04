import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import AccountsReducer from './accounts'
import PaymentsReducer from './payments'
import TransfersReducer from './transfers'

export default combineReducers({
  router: routerReducer,
  accounts: AccountsReducer,
  payments: PaymentsReducer,
  transfers: TransfersReducer,
})
