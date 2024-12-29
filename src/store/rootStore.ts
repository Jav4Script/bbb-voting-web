import { combine } from 'zustand/middleware'

import { useParticipantStore } from '../features/participants/stores/useParticipantStore'
import { useCaptchaStore } from '../features/captcha/stores/useCaptchaStore'
import { useVoteStore } from '../features/votes/stores/useVoteStore'
import { useResultStore } from '../features/results/stores/useResultStore'

const rootStore = combine(
  useParticipantStore,
  useCaptchaStore,
  useVoteStore,
  useResultStore,
  () => ({
    useParticipantStore,
    useCaptchaStore,
    useVoteStore,
    useResultStore,
  })
)

export default rootStore

// Root store configuration for state management
// Uses Zustand for lightweight and efficient state management
