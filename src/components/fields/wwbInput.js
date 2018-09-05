import React from 'react';

const WwbInput = (props) => {
  const { meta, input, id, label, type, placeholder, optional } = props

  return (
    <div>
      <div className='col-xs-12 col-sm-3'>
        <label htmlFor={id}>{label}</label>
        {optional && <span className='add-edit-form__optional'>(Opcional)</span>}
      </div>
      <div className='col-xs-12 col-sm-9'>
        <input {...input} id={id} type={type} className='form-control' placeholder={placeholder} />
        {(meta.error && meta.touched) && <div className='form-group__error'>{meta.error}</div>}
      </div>
    </div>
  );
};

export default WwbInput

//https://blog.bitsrc.io/build-awesome-forms-in-react-using-redux-form-d1e4c96f5850
