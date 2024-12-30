import api from '@/shared/services/api'

import { PartialResult } from '@features/results/entities/PartialResult'
import { ResultMapper } from '@features/results/mappers/ResultMapper'
import { FinalResults } from '@features/results/entities/FinalResults'

export const getPartialResults = async (): Promise<PartialResult[]> => {
  const { data } = await api.get('/v1/results/partial')

  return data
}

export const getFinalResults = async (): Promise<FinalResults> => {
  const { data } = await api.get('/v1/results/final')

  return ResultMapper.toFinalResultEntity(data)
}
