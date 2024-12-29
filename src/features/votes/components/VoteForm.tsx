import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'

import { useCastVote } from '../hooks/useVotes'
import { Vote } from '../entities/Vote'
import { useCaptchaStore } from '../../captcha/stores/useCaptchaStore'

const VoteForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Vote>()
  const { mutate: castVote } = useCastVote()
  const captchaToken = useCaptchaStore((state) => state.captchaToken)

  const onSubmit = (data: Vote) => {
    if (captchaToken) {
      castVote(
        { vote: data, captchaToken },
        {
          onSuccess: () => {
            reset()
            alert('Vote cast successfully!')
          },
          onError: () => {
            alert('Failed to cast vote.')
          },
        }
      )
    } else {
      alert('Please validate the CAPTCHA first.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <label htmlFor='device'>Device</label>
        <Input id='device' {...register('device')} required />
      </div>
      <div>
        <label htmlFor='ip_address'>IP Address</label>
        <Input id='ip_address' {...register('ipAddress')} required />
      </div>
      <div>
        <label htmlFor='participant_id'>Participant ID</label>
        <Input id='participant_id' {...register('participantId')} required />
      </div>
      <div>
        <label htmlFor='region'>Region</label>
        <Input id='region' {...register('region')} required />
      </div>
      <div>
        <label htmlFor='user_agent'>User Agent</label>
        <Input id='user_agent' {...register('userAgent')} required />
      </div>
      <div>
        <label htmlFor='voter_id'>Voter ID</label>
        <Input id='voter_id' {...register('voterId')} required />
      </div>
      <Button type='submit'>Cast Vote</Button>
    </form>
  )
}

export default VoteForm