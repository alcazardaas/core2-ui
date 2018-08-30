import React from 'react'
import logo from './../../../assets/img/2.png'

const Login_Component = (props) => {
  return (
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
  )
}

export default Login_Component
