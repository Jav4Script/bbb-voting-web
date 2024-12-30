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
import { useGenerateCaptcha } from '@features/captcha/hooks/useGenerateCaptcha'
import { useValidateCaptcha } from '@features/captcha/hooks/useValidateCaptcha'
import { useGetCaptcha } from '@features/captcha/hooks/useGetCaptcha'
import { useCaptchaStore } from '@features/captcha/stores/useCaptchaStore'

const CaptchaForm: React.FC = () => {
  const { mutate: generateCaptcha } = useGenerateCaptcha()
  const { mutate: validateCaptcha } = useValidateCaptcha()
  const captcha = useCaptchaStore((state) => state.captcha)
  const { toast } = useToast()
  const form = useForm<{ captchaSolution: string }>()

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

  return (
    <Card className='shadow-lg'>
      <CardHeader>
        <CardTitle>Captcha Verification</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='space-y-6'>
          <Button onClick={handleGenerateCaptcha} className='w-full'>
            Generate Captcha
          </Button>

          {captcha && captcha.image && (
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
                  <Button type='submit' className='w-full'>
                    Validate Captcha
                  </Button>
                </form>
              </Form>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export default CaptchaForm
