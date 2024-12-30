import React, { useEffect } from 'react'
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

import { useCastVote } from '@features/votes/hooks/useVotes'
import { Vote } from '@features/votes/entities/Vote'
import RadioCardGroup from '@/shared/components/RadioCardGroup'
import RadioCardItem from '@/shared/components/RadioCardItem'
import { useGetParticipants } from '@shared/hooks/useGetParticipants'
import { useCaptchaTokenStore } from '@/shared/stores/useCaptchaTokenStore'
import { useParticipantStore } from '@/shared/stores/useParticipantStore'

const VoteForm: React.FC = () => {
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
  }, [ipInfo])

  const onSubmit = (data: Vote) => {
    if (captchaToken) {
      castVote(
        { vote: data, captchaToken },
        {
          onSuccess: () => {
            reset()
            clearCaptchaToken()
            toast({
              title: 'Success',
              description: 'Vote cast successfully!',
              variant: 'default',
            })
            navigate('/captcha')
          },
          onError: () => {
            toast({
              title: 'Error',
              description: 'Failed to cast vote.',
              variant: 'destructive',
            })
          },
        }
      )
    } else {
      toast({
        title: 'Error',
        description: 'Please validate the CAPTCHA first.',
        variant: 'destructive',
      })
    }
  }

  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle>Cast Your Vote</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
            <Controller
              name='participantId'
              control={methods.control}
              rules={{ required: 'Participant is required' }}
              render={({ field }) => (
                <RadioCardGroup
                  value={field.value}
                  onValueChange={field.onChange}
                  isLoading={isParticipantsLoading}
                >
                  {participants.map((participant) => (
                    <RadioCardItem key={participant.id} value={participant.id}>
                      <div className='flex flex-col'>
                        <span className='font-bold mb-4'>
                          {participant.name}
                        </span>
                        <span className='text-sm text-gray-600'>
                          Age: {participant.age}
                        </span>
                        <span className='text-sm text-gray-600'>
                          Gender: {participant.gender}
                        </span>
                      </div>
                    </RadioCardItem>
                  ))}
                </RadioCardGroup>
              )}
            />
            <Button type='submit' className='w-full' disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Cast Vote'}
            </Button>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  )
}

export default VoteForm
