import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class createPayment extends React.Component {

  render() {

    const { handleSubmit, pristine, submitting } = this.props

    return (
      <div className='container transfers-cont' >
        <div className='justify-content-center'>
          <h3>Create or Update Payment</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='ClientSocialNumber'>Client</label>
          <Field className='u-full-width' type='text' name='ClientSocialNumber' component='input' />

          <label htmlFor='Currency'>Provider</label>
          <Field className='u-full-width' type='text' name='Currency' component='input' />

          <label htmlFor='AccountType'>Amount</label>
          <Field className='u-full-width' type='text' name='AccountType' component='input' />

           <label htmlFor='AccountType'>Due Date</label>
          <Field className='u-full-width' type='text' name='AccountType' component='input' />

           <label htmlFor='AccountType'>Currency</label>
          <Field className='u-full-width' type='text' name='AccountType' component='input' />

          <div>
            <button className='btn-login' type='submit' disabled={pristine || submitting}>Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'createPayment'
})(createPayment))
