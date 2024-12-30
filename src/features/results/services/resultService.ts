import api from '@/shared/services/api'

import { FinalResult } from '@features/results/entities/FinalResult'
import { PartialResult } from '@features/results/entities/PartialResult'
import { ResultMapper } from '@features/results/mappers/ResultMapper'

export const getFinalResults = async (): Promise<FinalResult[]> => {
  const { data } = await api.get('/v1/results/final')

  return data.map(ResultMapper.toFinalResultEntity)
}

export const getPartialResults = async (): Promise<PartialResult[]> => {
  const { data } = await api.get('/v1/results/partial')

  return data.map(ResultMapper.toPartialResultEntity)
}
