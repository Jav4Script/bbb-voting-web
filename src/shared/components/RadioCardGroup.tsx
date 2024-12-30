import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'

import { cn } from '@/shared/utils/shadcn'
import RadioCardItem from './RadioCardItem'

interface RadioCardGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  isLoading: boolean
  className?: string
}

const RadioCardGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioCardGroupProps
>(({ className, isLoading, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-4', className)}
      {...props}
      ref={ref}
    >
      {isLoading ? (
        <RadioCardItem value='loading' disabled>
          Loading...
        </RadioCardItem>
      ) : (
        children
      )}
    </RadioGroupPrimitive.Root>
  )
})
RadioCardGroup.displayName = 'RadioCardGroup'

export default RadioCardGroup
