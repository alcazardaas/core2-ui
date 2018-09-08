import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import getUserAccounts from './../../redux/actionCreators/useraccounts'
import getClientBySocialNumber from './../../redux/actionCreators/clientbysocialnumber'

import TopCont from './../../components/main_components/top/'
import MyAccounts from './../../components/main_components/myAccounts/'

class MainComponent extends React.Component {

  async componentDidMount() {
    let user = {
      "SocialNumber": sessionStorage.getItem('uClient'),
      "Password": "myPassword"
    }

    let obj = {
      "ClientId": sessionStorage.getItem('uClient')
    }

    this.props.getClientBySocialNumber(obj)
    this.props.getUserAccounts(user)
  }

  render() {

    var { isLoading, client, accounts, error } = this.props

    return (
      !isLoading ?
        <div>
          <TopCont username={client.firstName} />
          <MyAccounts accounts={accounts} />
        </div>
        : <div><h1>LOADING...</h1></div>
    )
  }
}

const mapStateToProps = state => ({
  client: state.clientSocialNumber.client,
  accounts: state.accounts.accounts,
  isLoading: state.accounts.isLoading,
  error: state.accounts.error
})

const mapDispatchToProps = {
  getUserAccounts,
  getClientBySocialNumber
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
