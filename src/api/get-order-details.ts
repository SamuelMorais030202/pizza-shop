import { api } from '@/lib/axios'

interface IGetOrdersDetailsParams {
  orderId: string
}

export type StatusOrder =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

export interface IGetOrderDetailsResponse {
  status: StatusOrder
  id: string
  createdAt: string
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: IGetOrdersDetailsParams) {
  const response = await api.get<IGetOrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}
