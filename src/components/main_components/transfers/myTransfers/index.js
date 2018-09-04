import React from 'react'

var JSONMenu = {
  'accItems': [
    { 'id': 1, 'discAccount': '123123', 'destBankAccount': '123123', 'amount': 500000, 'transactionDate': '2018-11-10' },
    { 'id': 2, 'discAccount': '321123', 'destBankAccount': '123123', 'amount': 500000, 'transactionDate': '2018-11-10' },
    { 'id': 3, 'discAccount': '321321', 'destBankAccount': '123123', 'amount': 500000, 'transactionDate': '2018-11-10' },
    { 'id': 4, 'discAccount': '234432', 'destBankAccount': '1231231', 'amount': 500000, 'transactionDate': '2018-11-10' },
    { 'id': 5, 'discAccount': '234234', 'destBankAccount': '123123213', 'amount': 500000, 'transactionDate': '2018-11-10' },
    { 'id': 6, 'discAccount': '421231', 'destBankAccount': '123123', 'amount': 500000, 'transactionDate': '2018-11-10' },
  ]
};

let items = JSONMenu.accItems.map(item => {
  return (
    <tr key={item.id}>
      <td>{item.discAccount}</td>
      <td>{item.destBankAccount}</td>
      <td>{item.amount}</td>
      <td>{item.transactionDate}</td>
    </tr>
  )
})

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
