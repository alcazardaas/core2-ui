import * as a from '../actions/types'
import history from './../../helpers/history'


const API_URL_USER = 'https://localhost:44353/api/useraccounts/login'

export default function login(userAccount) {
  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.LOGIN_REQUEST
    })

    try {
      // Call the API
      fetch(API_URL_USER, {
        method: 'POST',
        body: JSON.stringify(userAccount),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json().then(payload => ({ payload, response })))
        .then(({ response, payload }) => {
          if (response.status == "200") {

            sessionStorage.setItem('uClient', userAccount.socialNumber)
            sessionStorage.setItem('uToken', payload.token);
            sessionStorage.setItem('uRole', payload.isAdmin);

            dispatch({
              type: a.LOGIN_SUCCESS,
              payload: payload
            })

            history.push('/home')

          }
        })

      // Update payload in reducer on success

    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.LOGIN_FAILURE,
        error: err
      })
    }
  }
}