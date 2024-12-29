import api from '@/shared/services/api'

import { CaptchaDTO } from '../dtos/CaptchaDTO'
import { Captcha } from '../entities/Captcha'
import { CaptchaMapper } from '../mappers/CaptchaMapper'

export const getCaptcha = async (captchaId: string): Promise<Captcha> => {
  const { data } = await api.get(`/v1/captcha/${captchaId}`)

  return CaptchaMapper.toEntity(data)
}

export const generateCaptcha = async (): Promise<Captcha> => {
  const { data } = await api.get('/v1/generate-captcha')

  return CaptchaMapper.toEntity(data)
}

export const validateCaptcha = async (captcha: {
  captcha_id: string
  captcha_solution: string
}): Promise<{ token: string }> => {
  const { data, headers } = await api.post('/v1/validate-captcha', captcha)

  return { token: headers['x-captcha-token'] }
}