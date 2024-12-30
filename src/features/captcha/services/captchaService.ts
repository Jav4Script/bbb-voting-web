import api from '@/shared/services/api'

import { Captcha } from '@features/captcha/entities/Captcha'
import { CaptchaSolution } from '@features/captcha/entities/CaptchaSolution'
import { CaptchaMapper } from '../mappers/CaptchaMapper'

export const getCaptcha = async (captchaId: string): Promise<string> => {
  const { data } = await api.get(`/v1/captcha/${captchaId}`, {
    responseType: 'blob',
  })
  const imageUrl = URL.createObjectURL(data)

  return imageUrl
}

export const generateCaptcha = async (): Promise<Captcha> => {
  const { data } = await api.get('/v1/generate-captcha')

  return data
}

export const validateCaptcha = async (
  captchaSolution: CaptchaSolution
): Promise<{ token: string }> => {
  const { headers } = await api.post(
    '/v1/validate-captcha',
    CaptchaMapper.toCaptchaSolutionDTO(captchaSolution)
  )

  return { captchaToken: headers['x-captcha-token'] }
}
