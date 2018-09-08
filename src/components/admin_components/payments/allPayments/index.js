import React from 'react'

const AllPayments = ({ payments }) => {

  let items2 = payments.map(item => {
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
          Due Date: {item.dueDate}
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
