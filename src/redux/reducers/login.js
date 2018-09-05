import * as a from '../actions/types'

const INITIAL_STATE = {
  login: {},
  isLoading: true,
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
        isLoading: false
      }
    case a.LOGIN_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: true
      }
    default:
      return state
  }
}