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

      <div className="mytransfers-tablecontainer">
        {items2}
      </div>
    </div>
  )
}

export default MyTransfers
