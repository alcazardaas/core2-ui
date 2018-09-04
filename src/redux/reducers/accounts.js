import * as a from '../actions/types'

const INITIAL_STATE = {
  accounts: [],
  isLoading: true,
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
        isLoading: false
      }
    case a.ACCOUNTS_GETALL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: true
      }
    case a.ACCOUNTS_GETUSERACCOUNTS:
      return {
        ...state,
        accounts: action.payload,
        isLoading: false
      }
    default:
      return state
  }
}