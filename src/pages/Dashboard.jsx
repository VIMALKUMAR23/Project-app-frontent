import React from 'react'

import MyProject from '../components/MyProject'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>
      
      <div className='container-fluid'>
        <h4 className='ms-4 my-4'>
          Welcome <span className='text-warning'>Sulthan</span>
        </h4>
        <div className='row'>
          <div className='col-md-8'>
            <MyProject />
          </div>
          <div className='col-md-4'>
            <Profile />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard