import { useMutation, useQuery } from 'react-query'

import { getCaptcha, generateCaptcha, validateCaptcha } from '../services/captchaService'
import { useCaptchaStore } from '../stores/useCaptchaStore'

export const useGetCaptcha = (captchaId: string) => {
  const setCaptcha = useCaptchaStore((state) => state.setCaptcha)

  return useQuery(['captcha', captchaId], () => getCaptcha(captchaId), {
    onSuccess: (data) => {
      setCaptcha(data)
    },
  })
}

export const useGenerateCaptcha = () => {
  const generateCaptchaStore = useCaptchaStore((state) => state.generateCaptcha)

  return useMutation(generateCaptchaStore)
}

export const useValidateCaptcha = () => {
  const validateCaptchaStore = useCaptchaStore((state) => state.validateCaptcha)

  return useMutation(({ captchaId, captchaSolution }: { captchaId: string, captchaSolution: string }) => validateCaptchaStore(captchaId, captchaSolution))
}