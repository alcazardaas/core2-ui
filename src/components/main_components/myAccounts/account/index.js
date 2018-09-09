import React from 'react'
import { Link } from 'react-router-dom'

const Account = ({ accounts }) => {

  let items2 = accounts.map(item => {
    if (item.accountStatus) {
      return (
        <div key={item.id} className='row u-full-width div-list list-item'>
          <div className='offset-by-one columns ten'>
            Account: {item.accountNumber}
          </div>
          <div className='offset-by-one columns ten'>
            Client Account: {item.accountClientNumber}
          </div>
          <div className='offset-by-one columns five'>
            Currency: {item.currency}
          </div>
          <div className='offset-by-one columns five'>
            Balance: {item.balance}
          </div>
          <div className='offset-by-one columns five'>
            Account type: {item.accountType}
          </div>
        </div>
      )
    } else return
  })

  return (
    <div>
      <input className='login-input' type='text' id='searchBar' placeholder='SEARCH' />
      {items2}
    </div>
  )
}

export default Account
