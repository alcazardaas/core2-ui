import React from 'react'

class AllClients extends React.Component {

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
    var { clients } = this.props

    let filteredClients = clients.filter(
      (client) => {
        return client.firstName.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
      }
    );

    let items2 = filteredClients.map(item => {
      return (
        <div key={item.id} className='row u-full-width div-list list-item'>
          <div className='offset-by-one columns five'>
            Name: {item.firstName + ' ' + item.lastName}
          </div>
          <div className='offset-by-one columns five'>
            Zip code: {item.zip}
          </div>
          <div className='offset-by-one columns five'>
            Social Number: {item.socialNumber}
          </div>
          <div className='offset-by-one columns five'>
            Phone: {item.phoneNumber}
          </div>
          <div className='offset-by-one columns five'>
            Email: {item.email}
          </div>
          <div className='offset-by-one columns five'>
            City: {item.city}
          </div>
          <div className='offset-by-one columns five'>
            State: {item.state}
          </div>
        </div>
      )
    })

    return (
      <div className='container'>
        <div className='justify-content-center'>
          <h3>Clients</h3>
        </div>

        <input value={this.state.search} onChange={this.updateSearch.bind(this)} className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

        <div className="mytransfers-tablecontainer">
          {items2}
        </div>
      </div>
    )
  }
}


export default AllClients
