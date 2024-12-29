import React from 'react'

import { Skeleton } from '@/shared/components/ui/skeleton'
import { Alert, AlertDescription, AlertTitle } from '@/shared/components/ui/alert'

import { useGetParticipants } from '@features/participants/hooks/useParticipants'
import { useParticipantStore } from '@features/participants/stores/useParticipantStore'

import ParticipantItem from './ParticipantItem'

const ParticipantList: React.FC = () => {
  const { isLoading, isError } = useGetParticipants()
  const participants = useParticipantStore((state) => state.participants)

  if (isLoading)
    return (
      <Skeleton className='h-[200px] rounded-lg p-4 space-y-4 mx-4 md:mx-6 lg:mx-8' />
    )

  if (isError)
    return (
      <Alert>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Failed to load participants.</AlertDescription>
      </Alert>
    )

  return (
    <ul>
      {participants.map((participant: Participant) => (
        <ParticipantItem key={participant.id} participant={participant} />
      ))}
    </ul>
  )
}

export default ParticipantList