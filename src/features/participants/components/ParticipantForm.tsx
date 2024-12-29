import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

import { useCreateParticipant } from '@features/participants/hooks/useParticipants'
import { Participant } from '@features/participants/entities/Participant'

const ParticipantForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<Participant>()
  const { mutate: createParticipant } = useCreateParticipant()

  const onSubmit = (data: Participant) => {
    createParticipant(data, {
      onSuccess: () => {
        reset()
        alert('Participant created successfully!')
      },
      onError: () => {
        alert('Failed to create participant.')
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      <div>
        <Label htmlFor='name'>Name</Label>
        <Input id='name' {...register('name')} required />
      </div>
      <div>
        <Label htmlFor='age'>Age</Label>
        <Input id='age' type='number' {...register('age')} required />
      </div>
      <div>
        <Label htmlFor='gender'>Gender</Label>
        <Input id='gender' {...register('gender')} required />
      </div>
      <Button type='submit'>Create Participant</Button>
    </form>
  )
}

export default ParticipantForm