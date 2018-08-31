import 'babel-polyfill'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* SCSS */
import './assets/css/main.css'

/* COMPONENTS */
import Count from './components/Count'

/* PAGES */
import Login from './pages/login/'
import Home from './pages/home/'
import Transfers from './containers/transfersContainer/'

class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/counter' component={Count} />
          <Route exact path='/transfers' component={Transfers} />
        </Switch>
      </main>
    );
  }
}

export default App
