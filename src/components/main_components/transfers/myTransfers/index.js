import React from 'react'

const MyTransfers = ({ transfers }) => {

  let items2 = transfers.map(item => {

    var due = new Date(item.transactionDate),
      month = '' + (due.getMonth() + 1),
      day = '' + due.getDate(),
      year = due.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    due = [year, month, day].join('-')

    return (
      <div key={item.id} className='row u-full-width div-list list-item'>
        <div className='offset-by-one columns five'>
          Account: {item.discAccount}
        </div>
        <div className='offset-by-one columns five'>
          Destination Account: {item.destBankAccount}
        </div>
        <div className='offset-by-one columns five'>
          Amount: {item.amount}
        </div>
        <div className='offset-by-one columns five'>
          Tansaction Date: {due}
        </div>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3> My Transfers</h3>
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

export default MyTransfers
