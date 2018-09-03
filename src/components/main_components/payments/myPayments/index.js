import React from 'react'

var JSONPayments = {
  'accItems': [
    { 'id': 1, 'clientId': '2', 'providerId': '1', 'Currency': 'Colones', 'amount': 500000, 'dueDate': '2019-01-01', 'isPaid': false },
    { 'id': 2, 'clientId': '2', 'providerId': '2', 'Currency': 'colones', 'amount': 500000, 'dueDate': '2019-01-01', 'isPaid': false },
    { 'id': 3, 'clientId': '2', 'providerId': '3', 'Currency': 'colones', 'amount': 500000, 'dueDate': '2019-01-01', 'isPaid': false },
    { 'id': 4, 'clientId': '2', 'providerId': '4', 'Currency': 'colones', 'amount': 500000, 'dueDate': '2019-01-01', 'isPaid': false },
    { 'id': 5, 'clientId': '2', 'providerId': '5', 'Currency': 'colones', 'amount': 500000, 'dueDate': '2019-01-01', 'isPaid': false },
    { 'id': 6, 'clientId': '2', 'providerId': '6', 'Currency': 'colones', 'amount': 500000, 'dueDate': '2019-01-01', 'isPaid': false },
  ]
};

let items = JSONPayments.accItems.map(item => {
  return (
    <tr key={item.id}>
      <td>{item.clientId}</td>
      <td>{item.providerId}</td>
      <td>{item.Currency}</td>
      <td>{item.amount}</td>
      <td>{item.dueDate}</td>
      <td>{item.isPaid ? "Paid" : "Not paid"}</td>
    </tr>
  )
})

const MyPayments = (props) => {
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
              <th>Client</th>
              <th>Provider</th>
              <th>Currency</th>
              <th>Amount</th>
              <th>DueDate</th>
              <th>IsPaid</th>
            </tr>
          </thead>
          <tbody>
            {items}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyPayments
