import React from 'react'
import { Field, reduxForm } from 'redux-form'

//http://free.currencyconverterapi.com API for exchange

const ExchangeRate = ({ exchanged, handleSubmit, pristine, submitting }) => {

  return (
    <div className='main-exchange'>
      <h4 className='justify-content-center'>EXCHANGE RATE</h4>

      <form onSubmit={handleSubmit}>
        <label htmlFor='currency'>Client</label>
        <Field className='u-full-width' name='currency' component='select'>
          <option>SELECT CURRENCY</option>
          <option value="CRC">CRC</option>
          <option value="USD">USD</option>
        </Field>

        <label htmlFor='Quantity'>Quantity</label>
        <Field className='u-full-width' placeholder='Quantity' type='number' name='Quantity' component='input' />

        <div>
          <button className='u-full-width' type='submit' disabled={pristine || submitting}>Convert</button>
        </div>
      </form>
      <p>Total: {exchanged.totall}</p>
    </div>
  )
}

export default reduxForm({
  form: 'exchange'
})(ExchangeRate)
