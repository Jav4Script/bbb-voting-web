import React, { useEffect, useState } from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/shared/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import { useToast } from '@/shared/hooks/useToast'
import { useIpInfo } from '@/shared/hooks/useIpInfo'

import { useCastVote } from '@features/votes/hooks/useCastVote'
import { Vote } from '@features/votes/entities/Vote'
import EmptyState from '@/shared/components/EmptyState'
import RadioCardGroup from '@/shared/components/RadioCardGroup'
import RadioCardItem from '@/shared/components/RadioCardItem'
import { useGetParticipants } from '@shared/hooks/useGetParticipants'
import { useCaptchaTokenStore } from '@/shared/stores/useCaptchaTokenStore'
import { useParticipantStore } from '@/shared/stores/useParticipantStore'
import VoteSuccessCard from '@features/votes/components/VoteSuccessCard'

const VoteForm: React.FC = () => {
  const [voteSuccess, setVoteSuccess] = useState<Vote | null>(null)
  const methods = useForm<Vote>({
    defaultValues: {
      device: '',
      ipAddress: '',
      participantId: '',
      region: '',
      userAgent: '',
      voterId: '1',
    },
  })
  const { handleSubmit, reset, setValue } = methods
  const { mutate: castVote } = useCastVote()
  const captchaToken = useCaptchaTokenStore((state) => state.captchaToken)
  const clearCaptchaToken = useCaptchaTokenStore(
    (state) => state.clearCaptchaToken
  )
  const { toast } = useToast()
  const navigate = useNavigate()
  const { data: ipInfo, isLoading } = useIpInfo()
  const { isLoading: isParticipantsLoading } = useGetParticipants()
  const participants = useParticipantStore((state) => state.participants)

  useEffect(() => {
    if (ipInfo) {
      setValue('ipAddress', ipInfo.ip)
      setValue('region', ipInfo.region)
    }
    setValue('userAgent', navigator.userAgent)
    setValue('device', navigator.platform)
  }, [ipInfo, setValue])

  const onSubmit = (data: Vote) => {
    if (captchaToken) {
      castVote(
        { vote: data, captchaToken },
        {
          onSuccess: (vote) => {
            reset()
            setVoteSuccess(vote)
            toast({
              title: 'Sucesso',
              description: 'Voto registrado com sucesso!',
              variant: 'default',
            })
          },
          onError: () => {
            toast({
              title: 'Erro',
              description: 'Falha ao registrar voto.',
              variant: 'destructive',
            })
          },
        }
      )
    }
  }

  const handleVoteAgain = () => {
    clearCaptchaToken()
    setVoteSuccess(null)
    navigate('/captcha')
  }

  if (voteSuccess) {
    return (
      <VoteSuccessCard
        ipInfo={ipInfo}
        onVoteAgain={handleVoteAgain}
        onViewResults={() => navigate('/results/partial')}
        onBackToHome={() => navigate('/')}
      />
    )
  }

  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle>Formulário de Votação</CardTitle>
      </CardHeader>

      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <Controller
              name='participantId'
              control={methods.control}
              rules={{ required: 'Participante é obrigatório' }}
              render={({ field }) => (
                <RadioCardGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  isLoading={isParticipantsLoading}
                >
                  {participants.length === 0 ? (
                    <EmptyState message='Nenhum participante disponível.' />
                  ) : (
                    participants.map((participant) => (
                      <RadioCardItem
                        key={participant.id}
                        value={participant.id}
                      >
                        <div className='flex flex-col'>
                          <span className='font-bold mb-4'>
                            {participant.name}
                          </span>
                          <span className='text-sm text-gray-600'>
                            Idade: {participant.age}
                          </span>
                          <span className='text-sm text-gray-600'>
                            Gênero: {participant.gender}
                          </span>
                        </div>
                      </RadioCardItem>
                    ))
                  )}
                </RadioCardGroup>
              )}
            />

            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? 'Carregando...' : 'Registrar Voto'}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  )
}

export default VoteForm
