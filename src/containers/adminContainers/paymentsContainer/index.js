import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

import AllPayments from './../../../components/admin_components/payments/allPayments'
import CreatePayment from './../../../components/admin_components/payments/createPayment'

import getAllPayments from './../../../redux/actionCreators/payments'
import createPayment from './../../../redux/actionCreators/createPayment'


class Payments extends React.Component {

  async componentDidMount() {

    this.props.getAllPayments()
  }

  submit = values => {
    values = {...values, IsPaid: false}
    console.log(values)
    this.props.createPayment(values)
  }

  setGender(event) {
  }

  render() {

    var { isLoading, payments } = this.props

    return (
      !isLoading ? <div className="container">
        <div className="tabs" onChange={this.setGender.bind(this)}>
          <input type="radio" name="tab" id="tab1" defaultChecked />
          <label className='transfer-main-label' htmlFor="tab1">Payments</label>
          <input type="radio" name="tab" id="tab2" />
          <label className='transfer-main-label' htmlFor="tab2">Create Payment</label>

          <div className="tab-content-wrapper">
            <div id="tab-content-1" className="tab-content">
              <AllPayments payments={payments} />
            </div>
            <div id="tab-content-2" className="tab-content">
              <CreatePayment onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div> : <h1>Loading...</h1>
    )
  }
}

const mapStateToProps = state => ({
  payments: state.payments.payments,
  isLoading: state.payments.isLoading,
  error: state.payments.error
})

const mapDispatchToProps = {
  getAllPayments,
  createPayment
}

const reduxFormConf = {
  form: 'createPayment'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(Payments))
