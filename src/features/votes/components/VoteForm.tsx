import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { useToast } from '@/shared/hooks/use-toast'

import { Vote } from '@features/votes/entities/Vote'
import { useCastVote } from '@features/votes/hooks/useVotes'
import { useCaptchaTokenStore } from '@/shared/stores/useCaptchaTokenStore'

const VoteForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Vote>()
  const { mutate: castVote } = useCastVote()
  const captchaToken = useCaptchaTokenStore((state) => state.captchaToken)
  const clearCaptchaToken = useCaptchaTokenStore(
    (state) => state.clearCaptchaToken
  )
  const { toast } = useToast()

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
        <Form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
          <FormField
            name='device'
            control={register('device', { required: 'Device is required' })}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Device</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter your device' />
                </FormControl>
                <FormMessage>{errors.device?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name='ipAddress'
            control={register('ipAddress', {
              required: 'IP Address is required',
            })}
            render={({ field }) => (
              <FormItem>
                <FormLabel>IP Address</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter your IP address' />
                </FormControl>
                <FormMessage>{errors.ipAddress?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name='participantId'
            control={register('participantId', {
              required: 'Participant ID is required',
            })}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Participant ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter participant ID' />
                </FormControl>
                <FormMessage>{errors.participantId?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name='region'
            control={register('region', { required: 'Region is required' })}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Region</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter your region' />
                </FormControl>
                <FormMessage>{errors.region?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name='userAgent'
            control={register('userAgent', {
              required: 'User Agent is required',
            })}
            render={({ field }) => (
              <FormItem>
                <FormLabel>User Agent</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter your user agent' />
                </FormControl>
                <FormMessage>{errors.userAgent?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            name='voterId'
            control={register('voterId', { required: 'Voter ID is required' })}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Voter ID</FormLabel>
                <FormControl>
                  <Input {...field} placeholder='Enter your voter ID' />
                </FormControl>
                <FormMessage>{errors.voterId?.message}</FormMessage>
              </FormItem>
            )}
          />
          <Button type='submit' className='w-full'>
            Cast Vote
          </Button>
        </Form>
      </CardContent>
    </Card>
  )
}

export default VoteForm
