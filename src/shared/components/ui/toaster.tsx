import React from 'react'

import { useToast } from '@/shared/hooks/useToast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/shared/components/ui/toast'

interface ToastProps {
  id: string
  title?: string
  description?: React.ReactNode
  action?: React.ReactNode
  [key: string]: unknown
}

export const Toaster: React.FC = () => {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        ...props
      }: ToastProps) {
        return (
          <Toast key={id} {...props}>
            <div className='grid gap-1'>
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
