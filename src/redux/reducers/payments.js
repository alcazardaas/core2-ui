import * as a from '../actions/types'

const INITIAL_STATE = {
  payments: [],
  isLoading: false,
  error: ''
}

export default function paymentsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.PAYMENTS_GETALL_REQUEST:
      return {
        ...state
      }
    case a.PAYMENTS_GETALL_SUCCESS:
      return {
        ...state,
        payments: action.payload,
        isLoaded: true
      }
    case a.PAYMENTS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      }
    case a.PAYMENTS_GETUSERPAYMENTS:
      return {
        ...state,
        payments: action.payload,
        isLoaded: true
      }
    default:
      return state
  }
}