import React from 'react'

const MyTransfers = ({transfers}) => {

  let items2 = transfers.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.discAccount}</td>
        <td>{item.destBankAccount}</td>
        <td>{item.amount}</td>
        <td>{item.transactionDate}</td>
      </tr>
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
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Account</th>
              <th>Destination Account</th>
              <th>Amount</th>
              <th>Date</th>
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

export default MyTransfers
