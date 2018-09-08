import React from 'react'

const AllClients = ({ clients }) => {

  let items2 = clients.map(item => {
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

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        {items2}
      </div>
    </div>
  )

}


export default AllClients
