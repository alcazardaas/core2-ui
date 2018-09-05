import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import LogComp from './../../components/login_components/login/'
import login from './../../redux/actionCreators/login'

class Login extends React.Component {
  submit = values => {
    window.alert(JSON.stringify(values));
    this.props.login(values)
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


const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  login
}

const reduxFormConf = {
  form: 'userLogin'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(Login))
