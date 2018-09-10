import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/bankaccounts/getuseraccounts'

export default function getUserAccounts(userAccount) {
  
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.ACCOUNTS_GETALL_REQUEST
    })

    try {
      // Call the API
      const response = await fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(userAccount),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + sessionStorage.getItem('uToken')
        }
      })
      const result = await response.json()

      // Update payload in reducer on success
      dispatch({
        type: a.ACCOUNTS_GETUSERACCOUNTS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.ACCOUNTS_GETALL_FAILURE,
        error: err
      })
    }
  }
}