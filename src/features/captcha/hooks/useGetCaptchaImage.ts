import { useQuery } from 'react-query'

import { getCaptchaImage } from '@features/captcha/services/captchaService'
import { useCaptchaStore } from '@features/captcha/stores/useCaptchaStore'

interface useGetCaptchaImageProps {
  captchaId: string
  enabled: boolean
}

export const useGetCaptchaImage = ({
  captchaId,
  enabled,
}: useGetCaptchaImageProps) => {
  const setCaptchaImage = useCaptchaStore((state) => state.setCaptchaImage)

  return useQuery(['captcha', captchaId], () => getCaptchaImage(captchaId), {
    onSuccess: (data) => {
      setCaptchaImage(data)
    },
    enabled,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  })
}
