import React from 'react'

const AllProviders = ({ providers }) => {

  let items2 = providers.map(item => {
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

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        {items2}
      </div>
    </div>
  )

}


export default AllProviders
