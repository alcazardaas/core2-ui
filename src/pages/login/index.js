import React from 'react'
import { Link } from 'react-router-dom'

import LogComp from './../../components/login_components/login/'

class Login extends React.Component {
  submit = values => {
    window.alert(JSON.stringify(values));
  };
  
  render() {
    return (
      <div className="login-main-cont">
        <div className='container'>
          <div className="row">
            <LogComp onSubmit={this.submit} />
            <Link to={'/home'}> Ignore </Link>
            <Link to={'/counter'}> Me </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
