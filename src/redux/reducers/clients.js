import * as a from '../actions/types'

const INITIAL_STATE = {
  clients: [],
  isLoading: true,
  error: ''
}

export default function clientsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.CLIENTS_REQUEST:
      return {
        ...state
      }
    case a.CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.payload,
        isLoading: false
      }
    case a.CLIENTS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: true
      }
    default:
      return state
  }
}