import { api } from '@/lib/axios'

export type IGetPopularProducts = {
  product: string
  amount: number
}[]

export async function getPopularProducts() {
  const response = await api.get<IGetPopularProducts>(
    '/metrics/popular-products',
  )
  return response.data
}
