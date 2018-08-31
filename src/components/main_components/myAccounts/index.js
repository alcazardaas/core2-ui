import React from 'react'

import ExchangeRate from './exchangeRate/'
import Account from './account/'

const MyAccounts = (props) => {
  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>My Accounts</h3>
      </div>
      <Account />
      <ExchangeRate />
    </div>
  )
}

export default MyAccounts
