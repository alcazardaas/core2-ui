import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import getAllAccounts from './../../redux/actionCreators/accounts'

import TopCont from './../../components/main_components/top/'
import MyAccounts from './../../components/main_components/myAccounts/'

class MainComponent extends React.Component {

  async componentDidMount() {
    this.props.getAllAccounts()
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
  getAllAccounts
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent)
