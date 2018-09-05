import React from 'react'
import logo from './../../../assets/img/2.png'

import WwbInput from '../../fields/wwbInput'

import { Field, reduxForm } from 'redux-form'

const Login_Component = ({
  doSubmit,
  handleSubmit,
  pristine,
  reset,
  submitting }) => (
    <form onSubmit={handleSubmit(doSubmit)} className='add-edit-form'>
      <fieldset>
        <legend>Datos de la posición</legend>
        <fieldset className='add-edit-form__radchkset'>
          <div className='row middle-xs form-group-radcheck add-edit-form__row'>
            <div className='col-xs-12 col-sm-3'>
              <legend>Tipo de Empleo</legend>
            </div>
            <div className='col-xs-12 col-sm-9'>
              <Field
                name='type'
                value='Tiempo Completo'
                component={WwbInput}
                type='radio'
                id='type'
                label='Tiempo Completo'
              />
              <Field
                name='type'
                value='Medio Tiempo'
                component={WwbInput}
                type='radio'
                id='type'
                label='Medio Tiempo'
              />
            </div>
          </div>
        </fieldset>
      </fieldset>
    </form>
  )


export default Login_Component


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