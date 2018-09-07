import 'babel-polyfill'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* SCSS */
import './assets/css/main.css'

/* COMPONENTS */

/* CONTAINERS */
import Transfers from './containers/transfersContainer/'
import Payments from './containers/paymentsContainer/'
import Clients from './containers/adminContainers/clientsContainer'
import BankAccounts from './containers/adminContainers/bankaccountsContainer'
import Providers from './containers/adminContainers/providersContainer'
import AdminPayments from './containers/adminContainers/paymentsContainer'

/* PAGES */
import Login from './pages/login/'
import Home from './pages/home/'

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/transfers' component={Transfers} />
          <Route exact path='/payments' component={Payments} />
          <Route exact path='/clients' component={Clients} />
          <Route exact path='/bankaccounts' component={BankAccounts} />
          <Route exact path='/providers' component={Providers} />
          <Route exact path='/adminpayments' component={AdminPayments} />
        </Switch>
      </main>
    );
  }
}

export default App
