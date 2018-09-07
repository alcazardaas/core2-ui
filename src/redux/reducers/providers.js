import * as a from '../actions/types'

const INITIAL_STATE = {
  providers: [],
  isLoading: true,
  error: ''
}

export default function providersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.PROVIDERS_REQUEST:
      return {
        ...state
      }
    case a.PROVIDERS_SUCCESS:
      return {
        ...state,
        providers: action.payload,
        isLoading: false
      }
    case a.PROVIDERS_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: true
      }
    default:
      return state
  }
}