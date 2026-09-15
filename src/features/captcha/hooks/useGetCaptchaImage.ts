import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'

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

  const query = useQuery({
    queryKey: ['captcha', captchaId],
    queryFn: () => getCaptchaImage(captchaId),
    enabled,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: Infinity,
  })

  useEffect(() => {
    if (query.data) {
      setCaptchaImage(query.data)
    }
  }, [query.data, setCaptchaImage])

  return query
}
