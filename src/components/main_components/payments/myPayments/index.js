import React from 'react'

const MyPayments = ({ payments }) => {

  let items2 = payments.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.providerId}</td>
        <td>{item.currency}</td>
        <td>{item.amount}</td>
        <td>{item.dueDate}</td>
        <td>{item.isPaid ? "Paid" : "Not paid"}</td>
      </tr>
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
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Provider</th>
              <th>Currency</th>
              <th>Amount</th>
              <th>DueDate</th>
              <th>IsPaid</th>
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

export default MyPayments
