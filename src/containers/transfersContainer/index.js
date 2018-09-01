import React from 'react'
import Transfers from '../../components/main_components/transfers/transfer/'
import MyTransfers from '../../components/main_components/transfers/myTransfers/'

class TransferComponent extends React.Component {

  setGender(event) {
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="container">
        <div className="tabs" onChange={this.setGender.bind(this)}>
          <input type="radio" name="tab" id="tab1"  />
          <label className='transfer-main-label' htmlFor="tab1">Transfer</label>
          <input type="radio" name="tab" id="tab2" defaultChecked />
          <label className='transfer-main-label' htmlFor="tab2">My Transfers</label>

          <div className="tab-content-wrapper">
            <div id="tab-content-1" className="tab-content">
              <Transfers />
            </div>
            <div id="tab-content-2" className="tab-content">
              <MyTransfers />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TransferComponent
