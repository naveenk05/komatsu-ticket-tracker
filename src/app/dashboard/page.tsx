import React from 'react'
import Ticketcard from '../ui/dashboard/ticketcard/ticketcard'

function Dashboard() {
  return (
    <div>
      <div className='row'>
        <div className='col-8'>
          <h3>QA Dashboard</h3>
        </div>
        <div className='col-4 text-end'>
          <button>upload</button>
        </div>
      </div>
      <Ticketcard />
    </div>
  )
}

export default Dashboard
