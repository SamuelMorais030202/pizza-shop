import { api } from '@/lib/axios'

export interface IGetMonthRevenue {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<IGetMonthRevenue>('/metrics/month-receipt')
  return response.data
}
