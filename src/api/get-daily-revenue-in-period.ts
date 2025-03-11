import { api } from '@/lib/axios'

export type IGetDailyRevenueInPeriod = {
  date: string
  receipt: number
}[]

export interface IGetDailyRevenueProps {
  from?: Date
  to?: Date
}

export async function getDailyRevenueInPeriod({
  from,
  to,
}: IGetDailyRevenueProps) {
  const response = await api.get<IGetDailyRevenueInPeriod>(
    '/metrics/daily-receipt-in-period',
    {
      params: {
        from,
        to,
      },
    },
  )
  return response.data
}
