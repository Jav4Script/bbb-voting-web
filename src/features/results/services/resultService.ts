import api from '@/shared/services/api'

import { FinalResultDTO } from '../dtos/FinalResultDTO'
import { PartialResultDTO } from '../dtos/PartialResultDTO'
import { FinalResult } from '../entities/FinalResult'
import { PartialResult } from '../entities/PartialResult'
import { ResultMapper } from '../mappers/ResultMapper'

export const getFinalResults = async (): Promise<FinalResult[]> => {
  const { data } = await api.get('/v1/results/final')

  return data.map(ResultMapper.toFinalResultEntity)
}

export const getPartialResults = async (): Promise<PartialResult[]> => {
  const { data } = await api.get('/v1/results/partial')

  return data.map(ResultMapper.toPartialResultEntity)
}