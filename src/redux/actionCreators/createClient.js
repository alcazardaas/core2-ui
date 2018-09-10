import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/clients/'

export default function createClient(client) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CREATE_CLIENT_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(client),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      dispatch({
        type: a.CREATE_CLIENT_SUCCESS,
        payload: response.status
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CREATE_CLIENT_FAILURE,
        error: err
      })
    }
  }
}
