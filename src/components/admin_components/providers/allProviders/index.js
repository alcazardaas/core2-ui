import React from 'react'

class AllProviders extends React.Component {

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

    var { providers } = this.props

    let filteredproviders = providers.filter(
      (provider) => {
        return provider.name.toLowerCase().indexOf(this.state.search.toLocaleLowerCase()) !== -1;
      }
    )

    let items2 = filteredproviders.map(item => {
      return (
        <div key={item.id} className='row u-full-width div-list list-item'>
          <div className='offset-by-one columns ten'>
            Provider: {item.name}
          </div>
          <div className='offset-by-one columns ten'>
            Legal Number: {item.legalNumber}
          </div>
        </div>

      )
    })

    return (
      <div className='container'>
        <div className='justify-content-center'>
          <h3>Providers</h3>
        </div>

        <input value={this.state.search} onChange={this.updateSearch.bind(this)} className='login-input' type='text' id='search-bar' placeholder='SEARCH' />
        <div className="mytransfers-tablecontainer">
          {items2}
        </div>
      </div>
    )
  }
}


export default AllProviders
