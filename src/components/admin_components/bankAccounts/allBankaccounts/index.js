import React from 'react'

const AllBankAccounts = ({ bankaccounts }) => {

  let items2 = bankaccounts.map(item => {
    return (
      <div key={item.id} className='row u-full-width div-list list-item'>
        <div className='offset-by-one columns five'>
          Client: {item.clientId}
        </div>
        <div className='offset-by-one columns ten'>
          Account Number: {item.accountNumber}
        </div>
        <div className='offset-by-one columns ten'>
          Account Client Number: {item.accountClientNumber}
        </div>
        <div className='offset-by-one columns five'>
          Balance: {item.balance}
        </div>
        <div className='offset-by-one columns five'>
          Account type: {item.accountType}
        </div>
        <div className='offset-by-one columns five'>
          Status: {item.accountStatus ? "Active" : "Inactive"}
        </div>
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>Bank  Accounts</h3>
      </div>

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        {items2}
      </div>
    </div>
  )

}


export default AllBankAccounts
