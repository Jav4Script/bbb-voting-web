import { useMutation } from 'react-query'

import { generateCaptcha } from '@features/captcha/services/captchaService'
import { useCaptchaStore } from '@features/captcha/stores/useCaptchaStore'

export const useGenerateCaptcha = () => {
  const setCaptcha = useCaptchaStore((state) => state.setCaptcha)

  return useMutation(generateCaptcha, {
    onSuccess: (data) => {
      setCaptcha(data)
    },
  })
}