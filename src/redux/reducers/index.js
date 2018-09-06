import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import AccountsReducer from './accounts'
import PaymentsReducer from './payments'
import TransfersReducer from './transfers'
import LoginReducer from './login'
import CreateUserAccountReducer from './createUserAccount'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  accounts: AccountsReducer,
  payments: PaymentsReducer,
  transfers: TransfersReducer,
  login: LoginReducer,
  createUserAccount: CreateUserAccountReducer,
})
