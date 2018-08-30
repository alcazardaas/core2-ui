import React from 'react'

import ExchangeRate from './exchangeRate/'
import Account from './account/'

const MyAccounts = (props) => {
  return (
    <div className='container'>
      <div className="justify-content-center">
        <div className="row">
          <div>
            <h3>My Accounts</h3>
          </div>
          <Account />
          <ExchangeRate />
        </div>
      </div>
    </div>
  )
}

export default MyAccounts