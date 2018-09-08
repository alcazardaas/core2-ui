import React from 'react'

const TopComponent = ({username}) => {
  return (
    <div className='main-top-container justify-content-center'>
      <h1>Hello {' ' + username}</h1>
    </div>
  )
}

export default TopComponent
