import * as a from '../actions/types'

const INITIAL_STATE = {
  transfers: [],
  isLoading: true,
  error: ''
}

export default function transfersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.TRANSFERS_GETALL_REQUEST:
      return {
        ...state
      }
    case a.TRANSFERS_GETALL_SUCCESS:
      return {
        ...state,
        transfers: action.payload,
        isLoading: false
      }
    case a.TRANSFERS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: true
      }
    case a.TRANSFERS_GETUSERTRANSFERS:
      return {
        ...state,
        transfers: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}