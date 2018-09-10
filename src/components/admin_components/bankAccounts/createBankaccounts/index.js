import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class CreateBankAccount extends React.Component {

  render() {

    const { handleSubmit, pristine, submitting } = this.props

    return (
      <div className='container transfers-cont' >
        <div className='justify-content-center'>
          <h3>Create Account</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='ClientSocialNumber'>Client Social Number</label>
          <Field className='u-full-width' type='text' name='ClientSocialNumber' component='input' />

          <label htmlFor='Currency'>Currency</label>
          <Field className='u-full-width' name='Currency' component='select'>
            <option value=''>SELECT CURRENCY</option>
            <option value='Colones'>Colones</option>
            <option value='Dollars'>Dollars</option>
          </Field>

          <label htmlFor='AccountType'>Account Type</label>
          <Field className='u-full-width' name='AccountType' component='select'>
            <option value=''>SELECT TYPE</option>
            <option value='Savings'>Savings</option>
            <option value='Normal'>Normal</option>
            <option value='Exclusive'>Exclusive</option>
          </Field>

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
  form: 'createBankAccount'
})(CreateBankAccount))
