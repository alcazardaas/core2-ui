import React from 'react'
import { Link } from 'react-router-dom'

import LogComp from './../../components/login_components/login/'

const Login = (props) => {
  return (
    <div className="login-main-cont">
      <div className='container'>
        <div className="row">
          <LogComp />
          <Link to={'/home'}> Ignore </Link>
          <Link to={'/counter'}> Me </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
