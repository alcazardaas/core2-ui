import React from 'react'
import { Field, reduxForm } from 'redux-form'

const ModalLogin = (props) => {

  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div>
      <div>
        <p>
          <label className="justify-content-center btn-login btn--blue" htmlFor="modal-2">NEW ACCOUNT</label>
        </p>
      </div>

      <input className="modal-state btn-login" id="modal-2" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" htmlFor="modal-2"></label>
        <div className="modal__inner">
          <label className="modal__close" htmlFor="modal-2"></label>
          <form className='createUserAccount' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="socialNumber">Social Number</label>
              <div>
                <Field className='login-input' name='socialNumber' component='input' type='text' placeholder='USER' />
              </div>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <div>
                <Field className='login-input' name='password' component='input' type='password' placeholder='PASSWORD' />
              </div>
            </div>
            <div>
              <label htmlFor="vPassword">Verification Password</label>
              <div>
                <Field className='login-input' name='vPassword' component='input' type='password' placeholder='PASSWORD' />
              </div>
            </div>
            <div>
              <button className='btn-login' type="submit" disabled={pristine || submitting}>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default reduxForm({
  form: 'createUserAccount'
})(ModalLogin)
