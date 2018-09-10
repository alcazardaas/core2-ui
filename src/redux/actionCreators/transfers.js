import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/transfers'

export default function createTransfer(transfer) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.TRANSFERS_REQUEST
    })
    //console.log('asdfawfasdf')
    //console.log(transfer)

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(transfer),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      dispatch({
        type: a.TRANSFERS_SUCCESS,
        payload: response.status
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.TRANSFERS_FAILURE,
        error: err
      })
    }
  }
}
