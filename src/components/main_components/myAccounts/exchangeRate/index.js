import React from 'react'

//https://currencylayer.com/ API for exchange

const ExchangeRate = (props) => {
  return (
    <div className='main-exchange'>
      <h4 className='justify-content-center'>EXCHANGE RATE</h4>

      <select className="u-full-width" id="exampleRecipientInput">
        <option value="Option 1">Questions</option>
        <option value="Option 2">Admiration</option>
        <option value="Option 3">Can I get your number?</option>
      </select>

      <input type="number" className='u-full-width' placeholder='Quantity' />


      <select className="u-full-width" id="exampleRecipientInput">
        <option value="Option 1">Questions</option>
        <option value="Option 2">Admiration</option>
        <option value="Option 3">Can I get your number?</option>
      </select>

      <p>Total: 10</p>
    </div>
  )
}

export default ExchangeRate
