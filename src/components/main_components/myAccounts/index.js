import React from 'react'

import ExchangeRate from './exchangeRate/'
import Account from './account/'

const MyAccounts = ({ accounts }) => {
  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>My Accounts</h3>
      </div>
      <Account accounts={accounts} />
      <ExchangeRate />
    </div>
  )
}

export default MyAccounts
