import { create } from 'zustand'

import { Captcha } from '@features/captcha/entities/Captcha'

interface CaptchaStore {
  captcha: Captcha | null
  setCaptcha: (captcha: Captcha) => void
  setCaptchaImage: (captchaImage: Blob) => void
  clearCaptcha: () => void
}

export const useCaptchaStore = create<CaptchaStore>((set) => ({
  captcha: null,
  setCaptcha: (captcha) => set({ captcha }),
  setCaptchaImage: (captchaImage) =>
    set((state) => ({
      ...state,
      captcha: { ...state.captcha, image: URL.createObjectURL(captchaImage) },
    })),
  clearCaptcha: () => set((state) => ({ ...state, captcha: null })),
}))
