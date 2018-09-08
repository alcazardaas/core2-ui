import * as a from '../actions/types'

const INITIAL_STATE = {
  client: {},
  error: ''
}

export default function getClientBySocialNumber(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CLIENT_BY_SOCIALNUMBER_REQUEST:
      return {
        ...state
      }
    case a.CLIENT_BY_SOCIALNUMBER_SUCCESS:
      return {
        ...state,
        client: action.payload,
      }
    case a.CLIENT_BY_SOCIALNUMBER_FAILURE:
      return {
        ...state,
        error: action.error,
      }
    default:
      return state
  }
}