import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/payments/'

export default function createPayment(payments) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.CREATE_UPDATE_PAYMENT_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(payments),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      dispatch({
        type: a.CREATE_UPDATE_PAYMENT_SUCCESS,
        payload: response.status
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.CREATE_UPDATE_PAYMENT_FAILURE,
        error: err
      })
    }
  }
}
