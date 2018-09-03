import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/payments/getuserpayments'

export default function getUserAccounts(userAccount) {
  console.log(userAccount)

  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.PAYMENTS_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(userAccount),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const result = await response.json()

      // Update payload in reducer on success
      dispatch({
        type: a.PAYMENTS_GETUSERPAYMENTS,
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