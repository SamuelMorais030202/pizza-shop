import { api } from '@/lib/axios'

export interface IGetDayOrdersAmount {
  amount: number
  diffFromYesterday: number
}

export async function getDayOrdersAmount() {
  const response = await api.get<IGetDayOrdersAmount>(
    '/metrics/day-orders-amount',
  )
  return response.data
}
