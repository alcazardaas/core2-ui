import * as a from '../actions/types'

const INITIAL_STATE = {
  user: {},
  saved: false,
  error: ''
}

export default function paypaymentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.PAY_PAYMENT_REQUEST:
      return {
        ...state
      }
    case a.PAY_PAYMENT_SUCCESS:
      return {
        ...state,
        payment: action.payload,
        saved: true
      }
    case a.PAY_PAYMENT_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}