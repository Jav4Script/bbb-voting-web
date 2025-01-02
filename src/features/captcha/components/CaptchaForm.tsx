import React, { useRef, useEffect } from 'react'
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
import { useGetCaptchaImage } from '@/features/captcha/hooks/useGetCaptchaImage'
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
  const inputRef = useRef<HTMLInputElement>(null)

  const shouldDisplayCaptchaImage =
    captcha && captcha.image && isBlobUrl(captcha.image)

  useGetCaptchaImage({
    captchaId: captcha?.id,
    enabled: !!captcha?.id,
  })

  useEffect(() => {
    if (shouldDisplayCaptchaImage && inputRef.current) {
      inputRef.current.focus()
    }
  }, [shouldDisplayCaptchaImage])

  const handleGenerateCaptcha = () => {
    generateCaptcha(undefined, {
      onSuccess: () => {
        if (inputRef.current) {
          inputRef.current.focus()
        }
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
              title: 'Sucesso',
              description: 'Captcha validado com sucesso!',
              variant: 'default',
            })
            clearCaptcha()
            navigate('/votes')
          },
          onError: () => {
            toast({
              title: 'Erro',
              description: 'Falha ao validar o captcha.',
              variant: 'destructive',
            })
            handleGenerateCaptcha()
            form.reset()
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
        <CardTitle>Verificação de Captcha</CardTitle>
      </CardHeader>

      <CardContent>
        <div className='space-y-6'>
          <Button
            onClick={handleGenerateCaptcha}
            className='w-full'
            disabled={isGeneratingCaptcha}
          >
            {isGeneratingCaptcha ? 'Gerando...' : 'Gerar Captcha'}
          </Button>

          {shouldDisplayCaptchaImage && (
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
                        <FormLabel>Digite o Captcha</FormLabel>
                        <FormControl>
                          <Input
                            type='text'
                            {...field}
                            placeholder='Digite o Captcha'
                            ref={inputRef}
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
                    {isValidatingCaptcha ? 'Validando...' : 'Validar Captcha'}
                  </Button>
                </form>
              </Form>
            </div>
          )}
          <Button onClick={handleBackToHome} className='w-full'>
            Voltar para Home
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default CaptchaForm
