import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form'

import AccountsReducer from './accounts'
import PaymentsReducer from './payments'
import TransfersReducer from './transfers'

export default combineReducers({
  form: formReducer,
  router: routerReducer,
  accounts: AccountsReducer,
  payments: PaymentsReducer,
  transfers: TransfersReducer,
})
