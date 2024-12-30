import { combine } from 'zustand/middleware'

import { useParticipantStore } from '../features/participants/stores/useParticipantStore'
import { useCaptchaStore } from '../features/captcha/stores/useCaptchaStore'
import { useVoteStore } from '../features/votes/stores/useVoteStore'
import { useFinalResultStore } from '../features/results/stores/useFinalResultStore'
import { usePartialResultStore } from '../features/results/stores/usePartialResultStore'

const rootStore = combine(
  useParticipantStore,
  useCaptchaStore,
  useVoteStore,
  useFinalResultStore,
  usePartialResultStore,
  () => ({
    useParticipantStore,
    useCaptchaStore,
    useVoteStore,
    useFinalResultStore,
    usePartialResultStore,
  })
)

export default rootStore

// Root store configuration for state management
// Uses Zustand for lightweight and efficient state management
