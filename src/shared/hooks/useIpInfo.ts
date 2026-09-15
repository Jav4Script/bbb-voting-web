import { useQuery } from '@tanstack/react-query'

import { getIpInfo } from '@/shared/services/ipService'

export const useIpInfo = () => {
  return useQuery({
    queryKey: ['ipInfo'],
    queryFn: getIpInfo,
  })
}
