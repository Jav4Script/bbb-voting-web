import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

import { Skeleton } from '@/shared/components/ui/skeleton'
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/shared/components/ui/alert'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

import { Participant } from '@/shared/entities/Participant'
import { useGetParticipants } from '@/shared/hooks/useGetParticipants'
import { useParticipantStore } from '@/shared/stores/useParticipantStore'

import ParticipantItem from './ParticipantItem'
import EmptyState from '@/shared/components/EmptyState'

const ParticipantList: React.FC = () => {
  const { isLoading, isError } = useGetParticipants()
  const participants = useParticipantStore((state) => state.participants)

  if (isLoading)
    return (
      <div className='mx-4 md:mx-6 lg:mx-8'>
        <Skeleton className='h-[200px] w-full rounded-lg p-4 space-y-4' />
      </div>
    )

  if (isError)
    return (
      <div className='mx-4 md:mx-6 lg:mx-8'>
        <Alert>
          <ExclamationTriangleIcon className='h-5 w-5 text-red-500' />
          <AlertTitle>Erro</AlertTitle>
          <AlertDescription>Falha ao carregar participantes.</AlertDescription>
        </Alert>
      </div>
    )

  return (
    <div className='mx-4 md:mx-6 lg:mx-8'>
      <Card className='shadow-lg'>
        <CardHeader>
          <CardTitle>Lista de Participantes</CardTitle>
        </CardHeader>
        <CardContent>
          {participants.length === 0 ? (
            <EmptyState message='Nenhum participante disponível.' />
          ) : (
            <ul className='space-y-4'>
              {participants.map((participant: Participant) => (
                <ParticipantItem
                  key={participant.id}
                  participant={participant}
                />
              ))}
            </ul>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default ParticipantList
