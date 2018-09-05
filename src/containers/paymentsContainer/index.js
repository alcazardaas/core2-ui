import React from 'react'
import { connect } from 'react-redux'

import Payments from '../../components/main_components/payments/payments/'
import MyPayments from '../../components/main_components/payments/myPayments/'

import getUserPayments from './../../redux/actionCreators/userpayments'

class PaymentContainer extends React.Component {

  async componentDidMount() {
    let user = {
      "SocialNumber": sessionStorage.getItem('uClient'),
      "Password": "myPassword"
    }

    this.props.getUserPayments(user)
  }

  setGender(event) {
  }

  render() {

    var { isLoading, payments, error } = this.props

    return (
      !isLoading ?
        <div className="container">
          <div className="tabs" onChange={this.setGender.bind(this)}>
            <input type="radio" name="tab" id="tab1" defaultChecked />
            <label className='transfer-main-label' htmlFor="tab1">Payments</label>
            <input type="radio" name="tab" id="tab2" />
            <label className='transfer-main-label' htmlFor="tab2">My Payments</label>

            <div className="tab-content-wrapper">
              <div id="tab-content-1" className="tab-content">
                <Payments />
              </div>
              <div id="tab-content-2" className="tab-content">
                <MyPayments payments={payments} />
              </div>
            </div>
          </div>
        </div> : <div><h1>LOADING...</h1></div>
    )
  }
}

const mapStateToProps = state => ({
  payments: state.payments.payments,
  isLoading: state.payments.isLoading,
  error: state.payments.error
})

const mapDispatchToProps = {
  getUserPayments
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentContainer)
