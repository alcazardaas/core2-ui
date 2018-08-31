import React from 'react'
import { Link } from 'react-router-dom'

var JSONMenu = {
  'accItems': [
    { 'AccountNumber': '123123', 'Currency': 'colones', 'Balance': 500000, 'AccountType': 'Saving' },
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
      <td><Link to={'/'}>{item.AccountNumber}</Link></td>
      <td>{item.Currency}</td>
      <td>{item.Balance}</td>
      <td>{item.AccountType}</td>
    </tr>
  )
})

const Account = (props) => {
  return (
    <div>
      <input className='login-input' type='text' id='searchBar' placeholder='SEARCH' />
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
  )
}

export default Account
