import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/providers/'

export default function createProvider(provider) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CREATE_PROVIDER_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(provider),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatch({
        type: a.CREATE_PROVIDER_SUCCESS,
        payload: response.status
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CREATE_PROVIDER_FAILURE,
        error: err
      })
    }
  }
}
