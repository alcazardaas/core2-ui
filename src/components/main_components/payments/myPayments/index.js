import React from 'react'

const MyPayments = ({ payments }) => {

  let items2 = payments.map(item => {
    return (
      <div key={item.id} className='row u-full-width div-list list-item'>
        <div className='offset-by-one columns ten'>
          Provider: {item.providerId}
        </div>
        <div className='offset-by-one columns five'>
          Currency: {item.currency}
        </div>
        <div className='offset-by-one columns five'>
          Amount: {item.amount}
        </div>
        <div className='offset-by-one columns five'>
          Due Date: {item.dueDate}
        </div>
        <div className='offset-by-one columns five'>
          Status: {item.isPaid ? "Paid" : "Not paid"}
        </div>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3> My Payments</h3>
      </div>

      <div className="row">
        <div className="six columns">
          <label htmlFor="fromDate">From</label>
          <input className='input-date' type="date" name="fromDate" id="fromDate" />
        </div>
        <div className="six columns">
          <label htmlFor="toDate">To</label>
          <input className='input-date' type="date" name="toDate" id="toDate" />
        </div>
      </div>
      <button className='btn-login' type='submit'>SEARCH</button>

      <div className="mytransfers-tablecontainer">
        {items2}
      </div>
    </div>
  )
}

export default MyPayments
