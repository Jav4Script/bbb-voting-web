import React from 'react'
import { useFormContext, Controller } from 'react-hook-form'

import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'

import { Vote } from '@features/votes/entities/Vote'

interface FieldProps {
  name: keyof Vote
  label: string
  placeholder: string
  rules?: Record<string, unknown>
}

const VoteField: React.FC<FieldProps> = ({
  name,
  label,
  placeholder,
  rules,
}) => {
  const { control } = useFormContext<Vote>()
  const {
    formState: { errors },
  } = useFormContext<Vote>()

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} />
          </FormControl>
          <FormMessage>{errors[name]?.message}</FormMessage>
        </FormItem>
      )}
    />
  )
}

export default VoteField
