import { api } from '@/lib/axios'

export interface IGetMonthCanceledOrdersAmount {
  amount: number
  diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
  const response = await api.get<IGetMonthCanceledOrdersAmount>(
    '/metrics/month-canceled-orders-amount',
  )
  return response.data
}
