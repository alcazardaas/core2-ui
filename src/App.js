import 'babel-polyfill'

import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

/* SCSS */
import './assets/css/main.css'

/* COMPONENTS */
import Count from './components/Count'

/* PAGES */
import Home from './pages/home/'
import Login from './pages/login/'


class App extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/counter' component={Count} />
        </Switch>
        <Link to={'/home'}> Home </Link>
        <Link to={'/counter'}> Counter </Link>
      </main>
    );
  }
}

export default App
