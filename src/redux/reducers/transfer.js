import * as a from '../actions/types'

const INITIAL_STATE = {
  user: {},
  saved: false,
  error: ''
}

export default function createPaymentReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.TRANSFERS_REQUEST:
      return {
        ...state
      }
    case a.TRANSFERS_SUCCESS:
      return {
        ...state,
        transfer: action.payload,
        saved: true
      }
    case a.TRANSFERS_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}