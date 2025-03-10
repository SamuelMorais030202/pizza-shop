import { api } from '@/lib/axios'

export interface IGetMonthOrdersAmount {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthOrdersAmount() {
  const response = await api.get<IGetMonthOrdersAmount>(
    '/metrics/month-orders-amount',
  )
  return response.data
}
