import React from 'react'
import LogComp from './../../components/login_components/login/'
import { Link } from 'react-router-dom'


const Login = (props) => {
  return (
    <div className='container'>
      <div className="row">
        <h1>
          This is the login
        </h1>
        <LogComp />
        <Link to={'/home'}> Home </Link>
        <Link to={'/counter'}> Counter </Link>
      </div>
    </div>
  )
}

export default Login