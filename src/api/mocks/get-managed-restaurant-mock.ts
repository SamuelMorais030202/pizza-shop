import { http, HttpResponse } from "msw"

import { IGetManagedRestaurant } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<never, never, IGetManagedRestaurant>(
  '/managed-restaurant',
  () => {
    return HttpResponse.json({
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      createdAt: new Date(),
      updatedAt: null,
      description: 'Custom restaurant description',
      managerId: 'customer-user-id',
    })
  }
)