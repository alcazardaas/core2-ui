import React from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import history from './../../../helpers/history'

import AllProviders from './../../../components/admin_components/providers/allProviders'
import CreateProvider from './../../../components/admin_components/providers/createProvider'

import getAllProviders from './../../../redux/actionCreators/providers'
import createProvider from './../../../redux/actionCreators/createProvider'

class Providers extends React.Component {

  async componentDidMount() {

    this.props.getAllProviders()
  }

  submit = values => {
    this.props.createProvider(values)
    history.push('/home')
  }

  setGender(event) {
  }

  render() {

    var { isLoading, providers } = this.props

    return (
      !isLoading ? <div className="container">
        <div className="tabs" onChange={this.setGender.bind(this)}>
          <input type="radio" name="tab" id="tab1" defaultChecked />
          <label className='transfer-main-label' htmlFor="tab1">Providers</label>
          <input type="radio" name="tab" id="tab2" />
          <label className='transfer-main-label' htmlFor="tab2">Create Provider</label>

          <div className="tab-content-wrapper">
            <div id="tab-content-1" className="tab-content">
              <AllProviders providers={providers} />
            </div>
            <div id="tab-content-2" className="tab-content">
              <CreateProvider onSubmit={this.submit} />
            </div>
          </div>
        </div>
      </div> : <h1 className="saving">LOADING<span>.</span><span>.</span><span>.</span></h1>
    )
  }
}

const mapStateToProps = state => ({
  providers: state.providers.providers,
  isLoading: state.providers.isLoading,
  error: state.providers.error
})

const mapDispatchToProps = {
  getAllProviders,
  createProvider
}

const reduxFormConf = {
  form: 'createProvider'
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(reduxFormConf)(Providers))
