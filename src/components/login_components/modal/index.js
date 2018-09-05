import React from 'react'

const ModalLogin = (props) => {
  return (
    <div>
      <div>
        <p>
          <label className="btn btn--blue" htmlFor="modal-2">Click for more AWW</label>
        </p>
      </div>

      <input className="modal-state btn-login" id="modal-2" type="checkbox" />
      <div className="modal">
        <label className="modal__bg" htmlFor="modal-2"></label>
        <div className="modal__inner">
          <label className="modal__close" htmlFor="modal-2"></label>
          <h2>Sleppy sloth</h2>
          <p><img src="https://i.imgur.com/TPx9zYo.gif" alt="" />Aliquam in sagittis nulla. Curabitur euismod diam eget risus venenatis, sed dictum lectus bibendum. Nunc nunc nisi, hendrerit eget nisi id, rhoncus rutrum velit. Nunc vel mauris dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam fringilla quis nisi eget imperdiet.</p>
        </div>
      </div>
    </div>
  )
}

export default ModalLogin
