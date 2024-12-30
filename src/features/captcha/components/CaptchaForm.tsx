import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

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
import { useGenerateCaptcha } from '@features/captcha/hooks/useGenerateCaptcha'
import { useValidateCaptcha } from '@features/captcha/hooks/useValidateCaptcha'
import { useGetCaptcha } from '@features/captcha/hooks/useGetCaptcha'
import { useCaptchaStore } from '@features/captcha/stores/useCaptchaStore'
import { isBlobUrl } from '@shared/utils/typing'

const CaptchaForm: React.FC = () => {
  const { mutate: generateCaptcha, isLoading: isGeneratingCaptcha } =
    useGenerateCaptcha()
  const { mutate: validateCaptcha, isLoading: isValidatingCaptcha } =
    useValidateCaptcha()
  const captcha = useCaptchaStore((state) => state.captcha)
  const clearCaptcha = useCaptchaStore((state) => state.clearCaptcha)
  const { toast } = useToast()
  const form = useForm<{ captchaSolution: string }>({
    defaultValues: {
      captchaSolution: '',
    },
  })
  const navigate = useNavigate()

  useGetCaptcha({
    captchaId: captcha?.id,
    enabled: !!captcha?.id,
  })

  const handleGenerateCaptcha = () => {
    generateCaptcha(undefined, {
      onSuccess: () => {
        toast({
          title: 'Success',
          description: 'Captcha generated successfully!',
          variant: 'default',
        })
      },
      onError: () => {
        toast({
          title: 'Error',
          description: 'Failed to generate captcha.',
          variant: 'destructive',
        })
      },
    })
  }

  const handleValidateCaptcha = (data: { captchaSolution: string }) => {
    if (captcha) {
      validateCaptcha(
        { captchaId: captcha.id, captchaSolution: data.captchaSolution },
        {
          onSuccess: () => {
            toast({
              title: 'Success',
              description: 'Captcha validated successfully!',
              variant: 'default',
            })
            clearCaptcha()
            navigate('/votes')
          },
          onError: () => {
            toast({
              title: 'Error',
              description: 'Failed to validate captcha.',
              variant: 'destructive',
            })
          },
        }
      )
    }
  }

  const handleBackToHome = () => {
    navigate('/')
  }

  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle>Captcha Verification</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='space-y-6'>
          <Button
            onClick={handleGenerateCaptcha}
            className='w-full'
            disabled={isGeneratingCaptcha}
          >
            {isGeneratingCaptcha ? 'Generating...' : 'Generate Captcha'}
          </Button>

          {captcha && isBlobUrl(captcha.image) && (
            <div className='space-y-4'>
              <img src={captcha.image} alt='Captcha' className='mx-auto' />
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(handleValidateCaptcha)}
                  className='space-y-6'
                >
                  <FormField
                    name='captchaSolution'
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Enter Captcha</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            {...field}
                            placeholder='Enter Captcha'
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isValidatingCaptcha}
                  >
                    {isValidatingCaptcha ? 'Validating...' : 'Validate Captcha'}
                  </Button>
                </form>
              </Form>
            </div>
          )}
          <Button onClick={handleBackToHome} className='w-full'>
            Back to Home
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CaptchaForm
