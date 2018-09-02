import React from 'react'

var JSONMenu = {
  'accItems': [
    { 'AccountNumber': '123123', 'Currency': 'Colones', 'Balance': 500000, 'AccountType': 'Saving' },
    { 'AccountNumber': '321123', 'Currency': 'colones', 'Balance': 500000, 'AccountType': 'Saving' },
    { 'AccountNumber': '321321', 'Currency': 'colones', 'Balance': 500000, 'AccountType': 'Saving' },
    { 'AccountNumber': '234432', 'Currency': 'colones', 'Balance': 500000, 'AccountType': 'Saving' },
    { 'AccountNumber': '234234', 'Currency': 'colones', 'Balance': 500000, 'AccountType': 'Saving' },
    { 'AccountNumber': '421231', 'Currency': 'colones', 'Balance': 500000, 'AccountType': 'Saving' },
  ]
};

let items = JSONMenu.accItems.map(item => {
  return (
    <tr key={item.AccountNumber}>
      <td>{item.AccountNumber}</td>
      <td>{item.Currency}</td>
      <td>{item.Balance}</td>
      <td>{item.AccountType}</td>
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
              <th>Account</th>
              <th>Currency</th>
              <th>Balance</th>
              <th>Type</th>
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
