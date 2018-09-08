import React from 'react'
import { Link } from 'react-router-dom'

let isAdmin = sessionStorage.getItem('uRole')

var JSONMenu = {
  'menuItems': [
    { 'text': 'Home', 'to': 'home', 'icon': 'none' },
    { 'text': 'Payments', 'to': 'payments', 'icon': 'none' },
    { 'text': 'Transfers', 'to': 'transfers', 'icon': 'none' },
    { 'text': 'Contact', 'to': 'home', 'icon': 'none' },
  ]
};

var JSONMenuAdmin = {
  'menuItems': [
    { 'text': 'Home', 'to': 'home', 'icon': 'none' },
    { 'text': 'Clients', 'to': 'clients', 'icon': 'none' },
    { 'text': 'Bank Accounts', 'to': 'bankaccounts', 'icon': 'none' },
    { 'text': 'Providers', 'to': 'providers', 'icon': 'none' },
    { 'text': 'Payments', 'to': 'adminpayments', 'icon': 'none' },
  ]
};

var menu = isAdmin ? JSONMenuAdmin : JSONMenu;

let items = menu.menuItems.map(item => {
  return (
    <li key={item.text} className='menu-list-item'>
      <Link to={`/` + item.to} > {item.text} </Link>
    </li>
  )
})

const logout = () => {
  sessionStorage.clear();
}

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
          <li className='menu-list-item'>
            <Link onClick={logout} to={'/'} > Log Out </Link>
          </li>
        </ul>
      </div>
    )
  }

  menuToggle = e => {
    document.getElementById('sidebar').classList.toggle('active')
  }
}

export default Menu
