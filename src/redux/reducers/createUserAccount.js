import * as a from '../actions/types'

const INITIAL_STATE = {
  user: {},
  saved: false,
  error: ''
}

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CREATE_USER_ACCOUNT_REQUEST:
      return {
        ...state
      }
    case a.CREATE_USER_ACCOUNT_SUCCESS:
      return {
        ...state,
        login: action.payload,
        saved: true
      }
    case a.CREATE_USER_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}