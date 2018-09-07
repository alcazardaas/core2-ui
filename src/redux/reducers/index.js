import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import AccountsReducer from './accounts'
import PaymentsReducer from './payments'
import TransfersReducer from './transfers'
import LoginReducer from './login'
import CreateUserAccountReducer from './createUserAccount'
import PayPaymentReducer from './payPayment'
import CreatePaymentReducer from './transfer'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  accounts: AccountsReducer,
  payments: PaymentsReducer,
  transfers: TransfersReducer,
  login: LoginReducer,
  createUserAccount: CreateUserAccountReducer,
  payPayment: PayPaymentReducer,
  createTransfers: CreatePaymentReducer,
})
