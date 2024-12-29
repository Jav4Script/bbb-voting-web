import { create } from 'zustand'

import { getCaptcha, generateCaptcha, validateCaptcha } from '../services/captchaService'
import { Captcha } from '../entities/Captcha'

interface CaptchaStore {
  captcha: Captcha | null
  captchaToken: string | null
  setCaptcha: (captcha: Captcha) => void
  setCaptchaToken: (token: string) => void
  generateCaptcha: () => void
  validateCaptcha: (captchaId: string, captchaSolution: string) => void
}

export const useCaptchaStore = create<CaptchaStore>((set) => ({
  captcha: null,
  captchaToken: null,
  setCaptcha: (captcha) => set({ captcha }),
  setCaptchaToken: (token) => set({ captchaToken: token }),
  generateCaptcha: async () => {
    const captcha = await generateCaptcha()
    set({ captcha })
  },
  validateCaptcha: async (captchaId, captchaSolution) => {
    const { token } = await validateCaptcha({ captcha_id: captchaId, captcha_solution: captchaSolution })
    set({ captchaToken: token })
  },
}))