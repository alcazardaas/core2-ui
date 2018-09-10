import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import history from './../../helpers/history'

import Transfers from '../../components/main_components/transfers/transfer/'
import MyTransfers from '../../components/main_components/transfers/myTransfers/'

import getUserTransfers from './../../redux/actionCreators/usertransfers'
import createTransfer from './../../redux/actionCreators/transfers'


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

  submit = values => {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    d = [year, month, day].join('-');

    values = { ...values, TransactionDate: d }
    this.props.createTransfer(values)
    history.push('/home')
  }

  render() {

    var { isLoading, transfers } = this.props

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
                <Transfers onSubmit={this.submit} />
              </div>
              <div id="tab-content-2" className="tab-content">
                <MyTransfers transfers={transfers} />
              </div>
            </div>
          </div>
        </div> : <h1 className="saving">LOADING<span>.</span><span>.</span><span>.</span></h1>
    )
  }
}

const mapStateToProps = state => ({
  transfers: state.transfers.transfers,
  isLoading: state.transfers.isLoading,
  error: state.transfers.error
})

const mapDispatchToProps = {
  getUserTransfers,
  createTransfer
}

const reduxFormConf = {
  form: 'createTransfer'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(TransferContainer))
