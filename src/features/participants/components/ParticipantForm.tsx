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
import { useToast } from '@/shared/hooks/useToast'

import { useCreateParticipant } from '@/shared/hooks/useCreateParticipant'
import { Participant } from '@/shared/entities/Participant'

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
          title: 'Sucesso',
          description: 'Participante criado com sucesso!',
          variant: 'default',
        })
      },
      onError: () => {
        toast({
          title: 'Erro',
          description: 'Falha ao criar participante.',
          variant: 'destructive',
        })
      },
    })
  }

  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle>Criar Participante</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
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
                  <FormLabel>Idade</FormLabel>
                  <FormControl>
                    <Input type='number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='gender'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gênero</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              Criar Participante
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default ParticipantForm
