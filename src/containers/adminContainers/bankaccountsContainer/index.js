import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import history from './../../../helpers/history'

import AllBankAccounts from './../../../components/admin_components/bankAccounts/allBankaccounts'
import CreateBankAccounts from './../../../components/admin_components/bankAccounts/createBankaccounts'

import getAllBankaccounts from './../../../redux/actionCreators/accounts'
import createBankAccount from './../../../redux/actionCreators/createBankAccount'

class BankAccounts extends React.Component {

  async componentDidMount() {

    this.props.getAllBankaccounts()
  }

  submit = values => {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    d = [year, month, day].join('-');

    values = { ...values, AccountNumber: '123', AccountClientNumber: '123', Balance: 0, AccountStatus: true, CreatedDate: d }
    this.props.createBankAccount(values)
    history.push('/home')
  }

  setGender(event) {
  }

  render() {

    var { isLoading, accounts } = this.props

    return (
      !isLoading ?
        <div className="container">
          <div className="tabs" onChange={this.setGender.bind(this)}>
            <input type="radio" name="tab" id="tab1" defaultChecked />
            <label className='transfer-main-label' htmlFor="tab1">Bank Accounts</label>
            <input type="radio" name="tab" id="tab2" />
            <label className='transfer-main-label' htmlFor="tab2">Create Account</label>

            <div className="tab-content-wrapper">
              <div id="tab-content-1" className="tab-content">
                <AllBankAccounts bankaccounts={accounts} />
              </div>
              <div id="tab-content-2" className="tab-content">
                <CreateBankAccounts onSubmit={this.submit} />
              </div>
            </div>
          </div>
        </div> : <h1>Loading...</h1>
    )
  }
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  isLoading: state.accounts.isLoading,
  error: state.accounts.error
})

const mapDispatchToProps = {
  getAllBankaccounts,
  createBankAccount
}

const reduxFormConf = {
  form: 'createBankAccount'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(BankAccounts))
