import React from 'react'

import TopCont from './../../components/main_components/top/'
import MyAccounts from './../../components/main_components/myAccounts/'

class MainComponent extends React.Component {


  render() {
    return (
      <div>
        <TopCont />
        <MyAccounts />
      </div>
    )
  }
}

export default MainComponent
