import React from 'react'

import ParticipantForm from '../components/ParticipantForm'
import ParticipantList from '../components/ParticipantList'

const ParticipantsPage: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-2xl font-bold mb-4'>Participants</h1>

      <ParticipantForm />
      
      <div className='mt-8'>
        <ParticipantList />
      </div>
    </div>
  )
}

export default ParticipantsPage