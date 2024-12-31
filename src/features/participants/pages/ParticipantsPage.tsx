import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/components/ui/button'

import ParticipantForm from '@features/participants/components/ParticipantForm'
import ParticipantList from '@features/participants/components/ParticipantList'

const ParticipantsPage: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className='container mx-auto p-6'>
      <Button onClick={() => navigate('/')} className='mb-6'>
        Voltar para Home
      </Button>
      <h1 className='text-3xl font-bold mb-6'>Participantes</h1>

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
