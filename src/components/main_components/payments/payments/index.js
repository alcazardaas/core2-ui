import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'


import getUserAccounts from './../../../../redux/actionCreators/useraccounts'
import getUserPayments from './../../../../redux/actionCreators/userpayments'

class Transfers extends React.Component {

  async componentDidMount() {
    let user = {
      "SocialNumber": sessionStorage.getItem('uClient'),
      "Password": "myPassword"
    }

    this.props.getUserAccounts(user)
    this.props.getUserPayments(user)
  }

  render() {

    const { payments, accounts, handleSubmit, pristine, reset, submitting } = this.props

    let items2 = accounts.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.accountNumber + " - " + item.currency + " " + item.balance}
        </option>
      )
    })

    let items = payments.map(item => {
      if (!item.isPaid) {
        return (
          <option key={item.id} value={item.id}>
            {item.paymentType + " - " + item.currency + " " + item.amount}
          </option>
        )
      } else return
    })

    return (
      <div className='container transfers-cont'>
        <div className='justify-content-center'>
          <h3>Payments</h3>
        </div>
        <form onSubmit={handleSubmit}>

          <label htmlFor="BankAccountId">Origin Account</label>
          <Field className='u-full-width' name="BankAccountId" component="select">
            <option value="">SELECT ACCOUNT</option>
            {items2}
          </Field>

          <label htmlFor="ProviderId">Bill</label>
          <Field className='u-full-width' name="ProviderId" component="select">
            <option value="">SELECT BILL</option>
            {items}
          </Field>

          <div>
            <button className='btn-login' type="submit" disabled={pristine || submitting}>Pay</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  payments: state.payments.payments,
  isLoading: state.accounts.isLoading,
  error: state.accounts.error
})

const mapDispatchToProps = {
  getUserAccounts,
  getUserPayments
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'createPayment'
})(Transfers))
