import React from 'react'
import { Link } from 'react-router-dom'

const Account = ({ accounts }) => {

  let items2 = accounts.map(item => {
    return (
      <tr key={item.id}>
        <td><Link to={'/'}>{item.accountNumber}</Link></td>
        <td>{item.currency}</td>
        <td>{item.balance}</td>
        <td>{item.accountType}</td>
      </tr>
    )
  })

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
          {items2}
        </tbody>
      </table>
    </div>
  )
}

export default Account
