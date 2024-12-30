import React from 'react'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/ui/button'
import { Input } from '@/shared/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/components/ui/form'
import { useToast } from '@/shared/hooks/use-toast'

import { useCreateParticipant } from '@features/participants/hooks/useParticipants'
import { Participant } from '@features/participants/entities/Participant'

const ParticipantForm: React.FC = () => {
  const form = useForm<Participant>({
    defaultValues: {
      name: '',
      age: undefined,
      gender: '',
    },
  })
  const { mutate: createParticipant } = useCreateParticipant()
  const { toast } = useToast()

  const onSubmit = (data: Participant) => {
    // Convert age to number
    const participantData = {
      ...data,
      age: Number(data.age),
    }

    createParticipant(participantData, {
      onSuccess: () => {
        form.reset({
          name: '',
          age: undefined,
          gender: '',
        })
        toast({
          title: 'Success',
          description: 'Participant created successfully!',
          variant: 'default',
        })
      },
      onError: () => {
        toast({
          title: 'Error',
          description: 'Failed to create participant.',
          variant: 'destructive',
        })
      },
    })
  }

  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle>Create Participant</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='age'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
              rules={{
                valueAsNumber: true, // This ensures the value is converted to a number
              }}
            />
            <FormField
              name='gender'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>Create Participant</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ParticipantForm