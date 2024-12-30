import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { DotFilledIcon } from '@radix-ui/react-icons'

import { cn } from '@/shared/utils/shadcn'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card'

const RadioCardItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  return (
    <Card className='shadow-md'>
      <CardHeader>
        <CardTitle>{children}</CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroupPrimitive.Item
          ref={ref}
          className={cn(
            'relative flex items-center justify-between p-4 rounded-md border border-primary text-primary shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          {...props}
        >
          <div className='flex items-center'>
            <RadioGroupPrimitive.Indicator className='flex items-center justify-center'>
              <DotFilledIcon className='h-4 w-4 fill-primary' />
            </RadioGroupPrimitive.Indicator>
          </div>
        </RadioGroupPrimitive.Item>
      </CardContent>
    </Card>
  )
})
RadioCardItem.displayName = 'RadioCardItem'

export default RadioCardItem
