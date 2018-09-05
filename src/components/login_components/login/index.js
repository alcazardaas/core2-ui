import React from 'react'
import logo from './../../../assets/img/2.png'

import { Field, reduxForm } from 'redux-form'
import LoginModal from './../modal'

const Login_Component = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props

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
              <Field className='login-input' name='password' component='input' type='password' placeholder='USER' />
            </div>
          </div>
          <div>
            <button className='btn-login' type="submit" disabled={pristine || submitting}>Submit</button>
            <button className='btn-login' type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
          </div>
        </form>
        <LoginModal />
      </div>
    </div>
  )
}


export default reduxForm({
  form: 'login'
})(Login_Component)


/**
 * 
 <div className='offset-by-six five columns login-main-cont'>
      <div className="login-cont">
        <div className="logo-cont">
          <img className='login-logo' src={logo} alt='Logo' />
        </div>
        <div>
          <label htmlFor='userId'>User</label>
        </div>
        <div>
          <input className='login-input' type='text' id='userId' placeholder='USER' />
        </div>
        <div>
          <label htmlFor='passw'>Password</label>
        </div>
        <div>
          <input className='login-input' type='password' id='passw' placeholder='PASSWORD' />
        </div>
        <button className='btn-login' type='submit'>LOGIN</button>
      </div>
    </div>
 * 
 */