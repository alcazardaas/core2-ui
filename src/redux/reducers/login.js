import * as a from '../actions/types'

const INITIAL_STATE = {
  login: {},
  logged: false,
  error: ''
}

export default function loginReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.LOGIN_REQUEST:
      return {
        ...state
      }
    case a.LOGIN_SUCCESS:
      return {
        ...state,
        login: action.payload,
        logged: true
      }
    case a.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}