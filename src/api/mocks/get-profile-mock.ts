import { http, HttpResponse } from "msw"

import { IGetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, IGetProfileResponse>(
  '/me',
  () => {
    return HttpResponse.json({
      id: 'customer-user-id',
      name: 'John Doe',
      email: 'johndoe@example.com',
      phone: '12345678910',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null
    })
  }
)