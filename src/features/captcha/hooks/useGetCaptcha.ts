import { useQuery } from 'react-query'

import { getCaptcha } from '@features/captcha/services/captchaService'
import { useCaptchaStore } from '@features/captcha/stores/useCaptchaStore'

interface useGetCaptchaProps {
  captchaId: string
  enabled: boolean
}

export const useGetCaptcha = ({ captchaId, enabled }: useGetCaptchaProps) => {
  const setCaptchaImage = useCaptchaStore((state) => state.setCaptchaImage)

  return useQuery(['captcha', captchaId], () => getCaptcha(captchaId), {
    onSuccess: (data) => {
      setCaptchaImage(data)
    },
    enabled,
  })
}
