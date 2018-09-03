import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import getAllAccounts from './../../redux/actionCreators/accounts'
import getUserAccounts from './../../redux/actionCreators/useraccounts'

import TopCont from './../../components/main_components/top/'
import MyAccounts from './../../components/main_components/myAccounts/'

class MainComponent extends React.Component {

async componentDidMount() {
  let user = {
    "SocialNumber": "114000071",
    "Password": "12345678",
    "IsAdmin": false
  }

  this.props.getUserAccounts(user)
}

render() {

  var { isLoaded, accounts, error } = this.props

  return (
    isLoaded ?
      <div>
        <TopCont />
        <MyAccounts accounts={accounts} />
      </div>
      : <div><h1>LOADING...</h1></div>
  )
}
}

const mapStateToProps = state => ({
  accounts: state.accounts.accounts,
  isLoaded: state.accounts.isLoaded,
  error: state.accounts.error
})

const mapDispatchToProps = {
  getAllAccounts,
  getUserAccounts
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
