import React from 'react'

const Transfers = (props) => {
  return (
    <div className='container transfers-cont'>
      <div className='justify-content-center'>
        <h3>Payments</h3>
      </div>
      <label htmlFor="originAccount">Origin Account</label>
      <select className='u-full-width' name="originAccount" id="originAccount">
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>

      <label htmlFor="bill">Bill</label>
      <select className='u-full-width' name="bill" id="bill">
        <option value="grapefruit">bill</option>
        <option value="lime">bill l</option>
        <option value="coconut">bill ll</option>
        <option value="mango">bill lll</option>
      </select>

      <label htmlFor="amount">Amount</label>
      <input className='u-full-width' type="number" name="amount" id="amount" />

      <button className='btn-login' type='submit'>PAY</button>

    </div>
  )
}

export default Transfers
