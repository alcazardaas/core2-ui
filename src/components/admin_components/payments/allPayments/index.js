import React from 'react'

const AllPayments = ({ payments }) => {

  let items2 = payments.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.clientId}</td>
        <td>{item.providerId}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
        <td>{item.dueDate}</td>
        <td>{item.isPaid ? 'Paid' : 'Not Paid'}</td>
      </tr>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>Bank  Accounts</h3>
      </div>

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Client</th>
              <th>Provider</th>
              <th>Amount</th>
              <th>Currency</th>
              <th>DueDate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items2}
          </tbody>
        </table>
      </div>
    </div>
  )

}


export default AllPayments
