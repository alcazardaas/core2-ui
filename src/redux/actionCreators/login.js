import * as a from '../actions/types'

const API_URL_USER = 'https://localhost:44353/api/useraccounts/login'

export default function login(userAccount) {
  console.log(userAccount)
  
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.LOGIN_REQUEST
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
      sessionStorage.setItem('uToken', result.token);
      sessionStorage.setItem('uRole', result.isAdmin);
      
      alert('action creator reslt  ' +sessionStorage.getItem('uToken'))
      alert('action creator reslt  ' + sessionStorage.getItem('uRole'))

      // Update payload in reducer on success
      dispatch({
        type: a.LOGIN_SUCCESS,
        payload: result
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.LOGIN_FAILURE,
        error: err
      })
    }
  }
}