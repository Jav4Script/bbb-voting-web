import React from 'react'

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { useToast } from '@/shared/hooks/useToast'

import { useDeleteParticipant } from '@/shared/hooks/useDeleteParticipant'
import { Participant } from '@/shared/entities/Participant'

const ParticipantItem: React.FC<{ participant: Participant }> = ({
  participant,
}) => {
  const { mutate: deleteParticipant } = useDeleteParticipant()
  const { toast } = useToast()

  const handleDelete = () => {
    deleteParticipant(participant.id, {
      onSuccess: () => {
        toast({
          title: 'Sucesso',
          description: 'Participante excluído com sucesso!',
          variant: 'default',
        })
      },
      onError: () => {
        toast({
          title: 'Erro',
          description: 'Falha ao excluir participante.',
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
        <p>Idade: {participant.age}</p>
        <p>Gênero: {participant.gender}</p>
        <Button onClick={handleDelete} variant='destructive' className='mt-4'>
          Excluir
        </Button>
      </CardContent>
    </Card>
  )
}

export default ParticipantItem
