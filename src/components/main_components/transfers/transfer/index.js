import React from 'react'

const Transfers = (props) => {
  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>Transfers</h3>
      </div>
      <label htmlFor="originAccount">Origin Account</label>
      <select className='u-full-width' name="originAccount" id="originAccount">
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <label htmlFor="targetAccount">Target Account</label>
      <input className='u-full-width' type="number" name="targetAccount" id="targetAccount" />

      <label htmlFor="amount">Amount</label>
      <input className='u-full-width' type="number" name="amount" id="amount" />

      <button className='btn-login' type='submit'>TRANSFER</button>

    </div>
  )
}

export default Transfers
