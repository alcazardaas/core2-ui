import * as a from '../actions/types'

const INITIAL_STATE = {
  exchange: 0,
  error: ''
}

export default function exchangeReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.EXCHANGE_REQUEST:
      return {
        ...state
      }
    case a.EXCHANGE_SUCCESS:
      return {
        ...state,
        exchange: action.payload,
      }
    case a.EXCHANGE_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}