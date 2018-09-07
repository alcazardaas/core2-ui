import * as a from '../actions/types'

const INITIAL_STATE = {
  saved: false,
  error: ''
}

export default function createBankAccountReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CREATE_BANKACCOUNT_REQUEST:
      return {
        ...state
      }
    case a.CREATE_BANKACCOUNT_SUCCESS:
      return {
        ...state,
        payment: action.payload,
        saved: true
      }
    case a.CREATE_BANKACCOUNT_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}