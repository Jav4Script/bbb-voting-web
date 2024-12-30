import { useQuery } from 'react-query'

import { getIpInfo } from '@/shared/services/ipService'

export const useIpInfo = () => {
  return useQuery('ipInfo', getIpInfo)
}
