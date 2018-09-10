import React from 'react'
import { connect } from 'react-redux'

import logo from './../../../assets/img/2.png'

import { Field, reduxForm } from 'redux-form'
import LoginModal from './../modal'

import createUserAccount from './../../../redux/actionCreators/createuseraccount'

class Login_Component extends React.Component {

  submit = values => {
    if (values.password === values.vPassword) {
      var user = { socialNumber: values.socialNumber, password: values.password }
      this.props.createUserAccount(user)
    } else {
      alert('Passwords have to match')
    }

  };

  render() {

    const { handleSubmit, pristine, reset, submitting } = this.props

    return (
      <div className='offset-by-six five columns login-main-cont'>
        <div className="login-cont">
          <div className="logo-cont">
            <img className='login-logo' src={logo} alt='Logo' />
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="socialNumber">User</label>
              <div>
                <Field className='login-input' name='socialNumber' component='input' type='text' placeholder='USER' />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div>
                <Field className='login-input' name='password' component='input' type='password' placeholder='PASSWORD' />
              </div>
            </div>
            <div>
              <button className='btn-login' type="submit" disabled={pristine || submitting}>Log In</button>
            </div>
          </form>
          <LoginModal onSubmit={this.submit} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  logged: state.createUserAccount.saved,
})

const mapDispatchToProps = {
  createUserAccount
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login'
})(Login_Component))
