import 'babel-polyfill'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* SCSS */
import './assets/css/main.css'

/* COMPONENTS */

/* CONTAINERS */

/* PAGES */
import Login from './pages/login/'
import Home from './pages/home/'

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home'
            render={() => <Home container="home" />}
          />
          <Route exact path='/transfers'
            render={() => <Home container="transfers" />}
          />
          <Route exact path='/payments'
            render={() => <Home container="payments" />}
          />
          <Route exact path='/clients'
            render={() => <Home container="clients" />}
          />
          <Route exact path='/bankaccounts'
            render={() => <Home container="bankaccounts" />}
          />
          <Route exact path='/providers'
            render={() => <Home container="providers" />}

          />
          <Route exact path='/adminpayments'
            render={() => <Home container="adminpayments" />}
          />
        </Switch>
      </main>
    );
  }
}

export default App
