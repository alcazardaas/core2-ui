import React from 'react'

const AllProviders = ({ providers }) => {

  let items2 = providers.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.legalNumber}</td>
      </tr>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>Providers</h3>
      </div>

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Legal Number</th>
            </tr>
          </thead>
          <tbody>
            {items2}
          </tbody>
        </table>
      </div>
    </div>
  )

}


export default AllProviders
