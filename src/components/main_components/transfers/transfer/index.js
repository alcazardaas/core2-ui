import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import getUserAccounts from './../../../../redux/actionCreators/useraccounts'
import getUserTransfers from './../../../../redux/actionCreators/usertransfers'

class Transfers extends React.Component {

  async componentDidMount() {
    let user = {
      'SocialNumber': sessionStorage.getItem('uClient'),
      'Password': 'myPassword'
    }

    this.props.getUserAccounts(user)
    this.props.getUserTransfers(user)
  }

  render() {

    const { payments, accounts, handleSubmit, pristine, reset, submitting } = this.props

    let items2 = accounts.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.accountNumber + ' - ' + item.currency + ' ' + item.balance}
        </option>
      )
    })

    return (
      <div className='container transfers-cont' >
        <div className='justify-content-center'>
          <h3>Transfers</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='DiscAccount'>Origin Account</label>
          <Field className='u-full-width' name='DiscAccount' component='select'>
            <option value=''>SELECT ACCOUNT</option>
            {items2}
          </Field>

          <label htmlFor='DestBankAccountClientNumber'>Client Target Account</label>
          <Field className='u-full-width' type='number' name='DestBankAccountClientNumber' component='input' />

          <label htmlFor='Amount'>Amount</label>
          <Field className='u-full-width' type='number' name='Amount' component='input' />


          <div>
            <button className='btn-login' type='submit' disabled={pristine || submitting}>Transfer</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  transfers: state.transfers.transfers,
  isLoading: state.accounts.isLoading,
  error: state.accounts.error
})

const mapDispatchToProps = {
  getUserAccounts,
  getUserTransfers
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'createTransfer'
})(Transfers))
