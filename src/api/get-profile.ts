import { api } from '@/lib/axios'

interface IGetProfileResponse {
  name: string
  id: string
  email: string
  phone: string | null
  role: 'manager' | 'customer'
  createdAt: Date | null
  updatedAt: Date | null
}

export async function getProfile() {
  const response = await api.get<IGetProfileResponse>('/me')

  return response.data
}
