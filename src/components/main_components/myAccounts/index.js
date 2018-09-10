import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import exchange from "./../../../redux/actionCreators/exchange"

import ExchangeRate from './exchangeRate/'
import Account from './account/'

let total = { totall: 0 }

class MyAccounts extends React.Component {


  submit = values => {
    total = { ...total, quant: values.Quantity }
    this.props.exchange(values)
  }

  render() {

    var { accounts, exchangecurr } = this.props
    if (total.quant && exchangecurr) {
      total = { totall: (Math.round((total.quant * exchangecurr) * 100) / 100) }
      console.log('totall is ' + total.totall)
    }

    return (
      <div className='container'>
        <div className='justify-content-center'>
          <h3>My Accounts</h3>
        </div>
        <Account accounts={accounts} />
        <ExchangeRate onSubmit={this.submit} exchanged={total} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  exchangecurr: state.exchange.exchange
})

const mapDispatchToProps = {
  exchange
}

const reduxFormConf = {
  form: 'exchange'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(MyAccounts))
