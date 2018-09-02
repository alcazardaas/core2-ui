import React from 'react'
import { Link } from 'react-router-dom'

var JSONMenu = {
  'menuItems': [
    { 'text': 'Home', 'to': 'home', 'icon': 'none' },
    { 'text': 'My Accounts', 'to': 'home', 'icon': 'none' },
    { 'text': 'Payments', 'to': 'payments', 'icon': 'none' },
    { 'text': 'Transfers', 'to': 'transfers', 'icon': 'none' },
    { 'text': 'Counter', 'to': 'counter', 'icon': 'none' },
    { 'text': 'Contact', 'to': 'home', 'icon': 'none' },
  ]
};

let items = JSONMenu.menuItems.map(item => {
  return (
    <li key={item.text} className='menu-list-item'>
      <Link to={`/` + item.to} > {item.text} </Link>
    </li>
  )
})

class Menu extends React.Component {

  render() {
    return (
      <div className='sidebar' id='sidebar'>
        <div className="toggle-btn" onClick={this.menuToggle.bind(this)}>
          <span className='menu-toggle'></span>
          <span className='menu-toggle'></span>
          <span className='menu-toggle'></span>
        </div>

        <ul className='menu-list'>
          {items}
        </ul>
      </div>
    )
  }

  menuToggle = e => {
    document.getElementById('sidebar').classList.toggle('active')
  }
}

export default Menu
