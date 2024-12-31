import api from '@/shared/services/api'

import { Captcha } from '@features/captcha/entities/Captcha'
import { CaptchaSolution } from '@features/captcha/entities/CaptchaSolution'
import { CaptchaMapper } from '../mappers/CaptchaMapper'

export const getCaptchaImage = async (captchaId: string): Promise<Blob> => {
  const { data } = await api.get(`/v1/captcha/${captchaId}`, {
    responseType: 'blob',
  })

  return data
}

export const generateCaptcha = async (): Promise<Captcha> => {
  const { data } = await api.get('/v1/generate-captcha')

  return CaptchaMapper.ToCaptchaEntity(data)
}

export const validateCaptcha = async (
  captchaSolution: CaptchaSolution
): Promise<{ captchaToken: string }> => {
  const { headers } = await api.post(
    '/v1/validate-captcha',
    CaptchaMapper.toCaptchaSolutionDTO(captchaSolution)
  )

  return { captchaToken: headers['x-captcha-token'] }
}
