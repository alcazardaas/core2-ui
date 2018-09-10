import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/payments'

export default function getAllPayments() {
  console.log()

  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.PAYMENTS_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        headers: {
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      const result = await response.json()
      // Update payload in reducer on success
      dispatch({
        type: a.PAYMENTS_GETALL_SUCCESS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.PAYMENTS_GETALL_FAILURE,
        error: err
      })
    }
  }
}