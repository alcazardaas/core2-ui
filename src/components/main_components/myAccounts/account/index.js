import React from 'react'

class Account extends React.Component {

  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 20) });
  }

  render() {
    var { accounts } = this.props

    let filteredAccounts = accounts.filter(
      (account) => {
        return account.accountType.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
      }
    )

    let items2 = filteredAccounts.map(item => {
      if (item.accountStatus) {
        return (
          <div key={item.id} className='row u-full-width div-list list-item'>
            <div className='offset-by-one columns ten'>
              Account: {item.accountNumber}
            </div>
            <div className='offset-by-one columns ten'>
              Client Account: {item.accountClientNumber}
            </div>
            <div className='offset-by-one columns five'>
              Currency: {item.currency}
            </div>
            <div className='offset-by-one columns five'>
              Balance: {item.balance}
            </div>
            <div className='offset-by-one columns five'>
              Account type: {item.accountType}
            </div>
          </div>
        )
      } else return
    })

    return (
      <div>
        <input value={this.state.search} onChange={this.updateSearch.bind(this)} className='login-input' type='text' id='searchBar' placeholder='SEARCH' />
        {items2}
      </div>
    )
  }
}

export default Account
