import React from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import history from './../../helpers/history'
import LogComp from './../../components/login_components/login/'
import login from './../../redux/actionCreators/login'

class Login extends React.Component {
  submit = values => {
    this.props.login(values)
  }

  render() {
    return (
      <div className="login-main-cont">
        <div className='container'>
          <div className="row">
            <LogComp onSubmit={this.submit} />
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  logged: state.login.logged,
})

const mapDispatchToProps = {
  login
}

const reduxFormConf = {
  form: 'userLogin'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(Login))
