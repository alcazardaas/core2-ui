import * as a from '../actions/types'

let API_URL_USER = 'http://free.currencyconverterapi.com/api/v5/convert?q=usd_crc&compact=ultra'

export default function exchange(item) {

  return async dispatch => {
    // Initiate loading state
    dispatch({
      type: a.EXCHANGE_REQUEST
    })

    try {
      // Call the API
      if (item.currency === "CRC")
        API_URL_USER = "http://free.currencyconverterapi.com/api/v5/convert?q=crc_usd&compact=ultra"

      const response = await fetch(API_URL_USER)
      const result = await response.json()

      const value = result.CRC_USD ? result.CRC_USD : result.USD_CRC;

      // Update payload in reducer on success
      dispatch({
        type: a.EXCHANGE_SUCCESS,
        payload: value
      })
    } catch (err) {
      // Update error in reducer on failure
      dispatch({
        type: a.EXCHANGE_FAILURE,
        error: err
      })
    }
  }
}
