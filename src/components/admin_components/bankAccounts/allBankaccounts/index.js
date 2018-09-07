import React from 'react'

const AllBankAccounts = ({ bankaccounts }) => {

  let items2 = bankaccounts.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.clientId}</td>
        <td>{item.accountNumber}</td>
        <td>{item.accountClientNumber}</td>
        <td>{item.balance}</td>
        <td>{item.accountType}</td>
        <td>{item.accountStatus ? "Active" : "Inactive"}</td>
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
              <th>Account Number</th>
              <th>Client Account Number</th>
              <th>Balance</th>
              <th>Type</th>
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


export default AllBankAccounts
