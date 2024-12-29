import React from 'react'

import { Button } from '@/shared/components/ui/button'

import { useDeleteParticipant } from '@features/participants/hooks/useParticipants'
import { Participant } from '@features/participants/entities/Participant'

const ParticipantItem: React.FC<{ participant: Participant }> = ({ participant }) => {
  const { mutate: deleteParticipant } = useDeleteParticipant()

  const handleDelete = () => {
    deleteParticipant(participant.id, {
      onSuccess: () => {
        alert('Participant deleted successfully!')
      },
      onError: () => {
        alert('Failed to delete participant.')
      },
    })
  }

  return (
    <li>
      <p>{participant.name}</p>
      <p>{participant.age}</p>
      <p>{participant.gender}</p>
      <Button onClick={handleDelete} variant='destructive'>
        Delete
      </Button>
    </li>
  )
}

export default ParticipantItem