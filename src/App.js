import 'babel-polyfill'

import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Count from './components/Count'

class App extends React.Component {
  render() {
    return (
      <div>
        <header>

        </header>
        <main>
          <Count />
        </main>
        <footer>

        </footer>
      </div>
    )
  }
}

export default App