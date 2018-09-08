import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

class CreateClient extends React.Component {

  render() {

    const { handleSubmit, pristine, submitting } = this.props

    return (
      <div className='container transfers-cont' >
        <div className='justify-content-center'>
          <h3>Create Client</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor='SocialNumber'>Client Social Number</label>
          <Field className='u-full-width' type='text' name='SocialNumber' component='input' />

          <label htmlFor='FirstName'>First Name</label>
          <Field className='u-full-width' type='text' name='FirstName' component='input' />

          <label htmlFor='LastName'>Last Name</label>
          <Field className='u-full-width' type='text' name='LastName' component='input' />

          <label htmlFor='DateOfBirth'>Birth Date</label>
          <Field className='u-full-width' type='text' name='DateOfBirth' component='input' />

          <label htmlFor='PhoneNumber'>Phone Number</label>
          <Field className='u-full-width' type='number' name='PhoneNumber' component='input' />

          <label htmlFor='Email'>Email</label>
          <Field className='u-full-width' type='email' name='Email' component='input' />

          <label htmlFor='Address1'>Address</label>
          <Field className='u-full-width' type='text' name='Address1' component='input' />

          <label htmlFor='City'>City</label>
          <Field className='u-full-width' type='text' name='City' component='input' />

          <label htmlFor='State'>State</label>
          <Field className='u-full-width' type='text' name='State' component='input' />

          <label htmlFor='Zip'>Zip Code</label>
          <Field className='u-full-width' type='text' name='Zip' component='input' />

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
  form: 'createClient'
})(CreateClient))
