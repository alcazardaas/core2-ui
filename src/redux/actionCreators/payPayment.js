import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/payments/paypayment'

export default function payPayment(accountpaymeny) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.PAY_PAYMENT_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(accountpaymeny),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      dispatch({
        type: a.PAY_PAYMENT_SUCCESS,
        payload: response.status
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.PAY_PAYMENT_FAILURE,
        error: err
      })
    }
  }
}
