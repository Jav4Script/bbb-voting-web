import React from 'react'

import { Button } from '@/shared/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { useToast } from '@/shared/hooks/use-toast'

import { useDeleteParticipant } from '@features/participants/hooks/useParticipants'
import { Participant } from '@features/participants/entities/Participant'

const ParticipantItem: React.FC<{ participant: Participant }> = ({ participant }) => {
  const { mutate: deleteParticipant } = useDeleteParticipant()
  const { toast } = useToast()

  const handleDelete = () => {
    deleteParticipant(participant.id, {
      onSuccess: () => {
        toast({
          title: 'Success',
          description: 'Participant deleted successfully!',
          variant: 'default',
        })
      },
      onError: () => {
        toast({
          title: 'Error',
          description: 'Failed to delete participant.',
          variant: 'destructive',
        })
      },
    })
  }

  return (
    <Card className='shadow-md'>
      <CardHeader>
        <CardTitle>{participant.name}</CardTitle>
      </CardHeader>
      <CardContent className='flex flex-col items-center'>
        <p>Age: {participant.age}</p>
        <p>Gender: {participant.gender}</p>
        <Button onClick={handleDelete} variant='destructive' className='mt-4'>
          Delete
        </Button>
      </CardContent>
    </Card>
  )
}

export default ParticipantItem