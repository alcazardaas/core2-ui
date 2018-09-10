import * as a from '../actions/types'

const API_URL = 'https://localhost:44353/api/providers'

export default function getAllClients() {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.PROVIDERS_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL, {
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.PROVIDERS_SUCCESS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.PROVIDERS_FAILURE,
        error: err
      })
    }
  }
}
