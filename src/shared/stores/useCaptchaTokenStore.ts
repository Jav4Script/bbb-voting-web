import { create } from 'zustand'

interface CaptchaTokenStore {
  captchaToken: string | null
  setCaptchaToken: (captchaToken: string) => void
  clearCaptchaToken: () => void
}

export const useCaptchaTokenStore = create<CaptchaTokenStore>((set) => ({
  captchaToken: null,
  setCaptchaToken: (captchaToken) => set({ captchaToken }),
  clearCaptchaToken: () => set({ captchaToken: null }),
}))
