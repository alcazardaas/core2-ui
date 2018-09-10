import React from 'react'
import Menu from './../../components/main_components/menu/'

import MainContainer from './../../containers/mainContainer/'

import Transfers from './../../containers/transfersContainer'
import Payments from './../../containers/paymentsContainer/'
import Clients from './../../containers/adminContainers/clientsContainer'
import BankAccounts from './../../containers/adminContainers/bankaccountsContainer'
import Providers from './../../containers/adminContainers/providersContainer'
import AdminPayments from './../../containers/adminContainers/paymentsContainer'


const Home = (props) => {

  var containers = { 
    home: <MainContainer/> ,
    transfers: <Transfers/>,
    payments: <Payments/>,
    clients: <Clients/>,
    bankaccounts: <BankAccounts/>,
    providers: <Providers/>,
    adminpayments: <AdminPayments/>,
  }

  return (
    <div>
      <Menu />
      {
        containers[props.container] || <MainContainer/>
      }
    </div>
  )
}

export default Home
