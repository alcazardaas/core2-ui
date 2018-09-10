import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/clients/getclientbysocialnumber'

export default function getClientBySocialNumber(item) {

  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CLIENT_BY_SOCIALNUMBER_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.CLIENT_BY_SOCIALNUMBER_SUCCESS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CLIENT_BY_SOCIALNUMBER_FAILURE,
        error: err
      })
    }
  }
}
