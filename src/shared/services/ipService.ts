import axios from 'axios'

export interface IpInfo {
  ip: string
  city: string
  region: string
  country: string
  loc: string
  org: string
  postal: string
  timezone: string
}

export const getIpInfo = async (): Promise<IpInfo> => {
  const token = process.env.IPINFO_TOKEN

  const { data } = await axios.get<IpInfo>(
    `https://ipinfo.io/json?token=${token}`
  )

  return data
}
