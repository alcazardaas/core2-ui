import React from 'react'
import { connect } from 'react-redux'

import Transfers from '../../components/main_components/transfers/transfer/'
import MyTransfers from '../../components/main_components/transfers/myTransfers/'

import getUserTransfers from './../../redux/actionCreators/usertransfers'

class TransferContainer extends React.Component {

  async componentDidMount() {
    let user = {
      "SocialNumber": sessionStorage.getItem('uClient'),
      "Password": "myPassword"
    }

    this.props.getUserTransfers(user)
  }

  setGender(event) {
  }

  render() {

    var { isLoading, transfers, error } = this.props

    return (
      !isLoading ?
        <div className="container">
          <div className="tabs" onChange={this.setGender.bind(this)}>
            <input type="radio" name="tab" id="tab1" defaultChecked />
            <label className='transfer-main-label' htmlFor="tab1">Transfer</label>
            <input type="radio" name="tab" id="tab2" />
            <label className='transfer-main-label' htmlFor="tab2">My Transfers</label>

            <div className="tab-content-wrapper">
              <div id="tab-content-1" className="tab-content">
                <Transfers />
              </div>
              <div id="tab-content-2" className="tab-content">
                <MyTransfers transfers={transfers} />
              </div>
            </div>
          </div>
        </div> : <div><h1>LOADING...</h1></div>
    )
  }
}

const mapStateToProps = state => ({
  transfers: state.transfers.transfers,
  isLoading: state.transfers.isLoading,
  error: state.transfers.error
})

const mapDispatchToProps = {
  getUserTransfers
}

export default connect(mapStateToProps, mapDispatchToProps)(TransferContainer)
