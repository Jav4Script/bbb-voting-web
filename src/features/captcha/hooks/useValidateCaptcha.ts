import { useMutation } from 'react-query'

import { CaptchaSolution } from '@features/captcha/entities/CaptchaSolution'
import { validateCaptcha } from '@features/captcha/services/captchaService'
import { useCaptchaTokenStore } from '@/shared/stores/useCaptchaTokenStore'

export const useValidateCaptcha = () => {
  const setCaptchaToken = useCaptchaTokenStore((state) => state.setCaptchaToken)

  return useMutation(
    ({ captchaId, captchaSolution }: CaptchaSolution) =>
      validateCaptcha({ captchaId, captchaSolution }),
    {
      onSuccess: (data) => {
        setCaptchaToken(data.captchaToken)
      },
    }
  )
}
