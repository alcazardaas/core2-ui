import React from 'react'

const AllClients = ({ clients }) => {

  let items2 = clients.map(item => {
    return (
      <tr key={item.id}>
        <td>{item.firstName + ' ' + item.lastName}</td>
        <td>{item.socialNumber}</td>
        <td>{item.phoneNumber}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td>{item.state}</td>
        <td>{item.zip}</td>
      </tr>
    )
  })

  return (
    <div className='container'>
      <div className='justify-content-center'>
        <h3>Bank  Accounts</h3>
      </div>

      <input className='login-input' type='text' id='search-bar' placeholder='SEARCH' />

      <div className="mytransfers-tablecontainer">
        <table className='u-full-width'>
          <thead>
            <tr>
              <th>Client</th>
              <th>Social Number</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
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


export default AllClients
