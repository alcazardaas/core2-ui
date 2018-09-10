import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import history from './../../../helpers/history'

import AllClients from './../../../components/admin_components/clients/allClients'
import CreateClient from './../../../components/admin_components/clients/createClient'

import getAllClients from './../../../redux/actionCreators/clients'
import createClient from './../../../redux/actionCreators/createClient'

class Clients extends React.Component {

  async componentDidMount() {

    this.props.getAllClients()
  }

  submit = values => {
    var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    d = [year, month, day].join('-');

    values = { ...values, DateOfRegistration: d }
    this.props.createClient(values)
    history.push('/home')
  }

  setGender(event) {
  }

  render() {

    var { isLoading, clients } = this.props

    return (
      !isLoading ? <div className="container">
        <div className="tabs" onChange={this.setGender.bind(this)}>
          <input type="radio" name="tab" id="tab1" defaultChecked />
          <label className='transfer-main-label' htmlFor="tab1">Clients</label>
          <input type="radio" name="tab" id="tab2" />
          <label className='transfer-main-label' htmlFor="tab2">Create Client</label>

          <div className="tab-content-wrapper">
            <div id="tab-content-1" className="tab-content">
              <AllClients clients={clients} />
            </div>
            <div id="tab-content-2" className="tab-content">
              <CreateClient onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div> : <h1>Loading...</h1>
    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients.clients,
  isLoading: state.clients.isLoading,
  error: state.clients.error
})

const mapDispatchToProps = {
  getAllClients,
  createClient
}

const reduxFormConf = {
  form: 'createClient'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(Clients))
