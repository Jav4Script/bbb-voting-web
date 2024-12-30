import React from 'react'
import { useNavigate } from 'react-router-dom'

import ParticipantForm from '../components/ParticipantForm'
import ParticipantList from '../components/ParticipantList'
import { Button } from '@/shared/components/ui/button'

const ParticipantsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='container mx-auto p-6'>
      <Button onClick={() => navigate('/')} className='mb-6'>
        Back to Home
      </Button>
      <h1 className='text-3xl font-bold mb-6'>Participants</h1>

      <div className='mb-8'>
        <ParticipantForm />
      </div>

      <div className='mt-8'>
        <ParticipantList />
      </div>
    </div>
  )
}

export default ParticipantsPage