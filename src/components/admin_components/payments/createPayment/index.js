import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import getAllClients from './../../../../redux/actionCreators/clients'
import getAllProviders from './../../../../redux/actionCreators/providers'

class createPayment extends React.Component {

  async componentDidMount() {
    this.props.getAllClients()
    this.props.getAllProviders()
  }

  render() {

    const { providers, clients, handleSubmit, pristine, submitting } = this.props

    let items2 = providers.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      )
    })

    let items = clients.map(item => {
      return (
        <option key={item.id} value={item.id}>
          {item.firstName + ' ' + item.lastName}
        </option>
      )
    })

    return (
      <div className='container transfers-cont' >
        <div className='justify-content-center'>
          <h3>Create or Update Payment</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='ClientId'>Client</label>
          <Field className='u-full-width' name='ClientId' component='select'>
            <option value=''>SELECT CLIENT</option>
            {items}
          </Field>

          <label htmlFor='ProviderId'>Provider</label>
          <Field className='u-full-width' name='ProviderId' component='select'>
            <option value=''>SELECT PROVIDER</option>
            {items2}
          </Field>

          <label htmlFor='Amount'>Amount</label>
          <Field className='u-full-width' type='number' name='Amount' component='input' />

          <label htmlFor='DueDate'>Due Date</label>
          <Field className='u-full-width' type='text' name='DueDate' component='input' />

          <div>
            <button className='btn-login' type='submit' disabled={pristine || submitting}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients,
  providers: state.providers.providers,
  isLoading: state.providers.isLoading,
  error: state.providers.error
})

const mapDispatchToProps = {
  getAllClients,
  getAllProviders
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'createPayment'
})(createPayment))
