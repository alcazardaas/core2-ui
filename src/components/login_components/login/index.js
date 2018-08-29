import React from 'react'

const Login_Component = (props) => {
  return (
    <div className='offset-by-four column login-cont'>
      <div>
        <label htmlFor='userId'>User</label>
      </div>
      <div>
        <input type='text' id='userId' placeholder='USER' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
      </div>
      <div>
        <input type='password' id='pasword' placeholder='PASSWORD' />
      </div>
      <button type='submit'>LOGIN</button>
    </div>
  )
}

export default Login_Component
