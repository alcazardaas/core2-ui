import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import AccountsReducer from './accounts'
import PaymentsReducer from './payments'
import TransfersReducer from './transfers'
import LoginReducer from './login'
import CreateUserAccountReducer from './createUserAccount'
import PayPaymentReducer from './payPayment'
import CreateTransferReducer from './transfer'
import CreateBankAccountReducer from './createBankAccount'
import ClientsReducer from './clients'
import CreateClientReducer from './createClient'
import ProvidersReducer from './providers'
import CreateProviderReducer from './createProvider'
import CreatePaymentReducer from './createPayment'
import ClientBySocialNumberReducer from './clientbysocialnumber'


export default combineReducers({
  form: formReducer,
  router: routerReducer,
  accounts: AccountsReducer,
  payments: PaymentsReducer,
  transfers: TransfersReducer,
  login: LoginReducer,
  createUserAccount: CreateUserAccountReducer,
  payPayment: PayPaymentReducer,
  createTransfers: CreateTransferReducer,
  createBankAccount: CreateBankAccountReducer,
  clients: ClientsReducer,
  createClient: CreateClientReducer,
  providers: ProvidersReducer,
  createProvider: CreateProviderReducer,
  createPayment: CreatePaymentReducer,
  clientSocialNumber: ClientBySocialNumberReducer,
})
