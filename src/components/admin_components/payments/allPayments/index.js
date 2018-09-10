import React from 'react'

const AllPayments = ({ payments }) => {

  let items2 = payments.map(item => {

    var due = new Date(item.dueDate),
      month = '' + (due.getMonth() + 1),
      day = '' + due.getDate(),
      year = due.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    due = [year, month, day].join('-')

    return (
      <div key={item.id} className='row u-full-width div-list list-item'>
        <div className='offset-by-one columns five'>
          Client: {item.clientId}
        </div>
        <div className='offset-by-one columns five'>
          Provider: {item.providerId}
        </div>
        <div className='offset-by-one columns five'>
          Amount: {item.amount}
        </div>
        <div className='offset-by-one columns five'>
          Currency: {item.currency}
        </div>
        <div className='offset-by-one columns five'>
          Status: {item.isPaid ? 'Paid' : 'Not Paid'}
        </div>
        <div className='offset-by-one columns twelve'>
          Due Date: {due}
        </div>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>Payments</h3>
      </div>

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        {items2}
      </div>
    </div>
  )

}


export default AllPayments
