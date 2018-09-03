import * as a from '../actions/types'

const INITIAL_STATE = {
  accounts: [],
  isLoading: false,
  error: ''
}

export default function accountsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.ACCOUNTS_GETALL_REQUEST:
      return {
        ...state
      }
    case a.ACCOUNTS_GETALL_SUCCESS:
      return {
        ...state,
        accounts: action.payload,
        isLoaded: true
      }
    case a.ACCOUNTS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      }
    default:
      return state
  }
}