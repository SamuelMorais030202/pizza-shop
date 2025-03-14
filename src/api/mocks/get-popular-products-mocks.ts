import { http, HttpResponse } from "msw"

import { IGetPopularProducts } from '../get-popular-products'

export const getPopularProductsMock = http.get<never, never, IGetPopularProducts>(
  '/metrics/popular-products',
  () => {
    return HttpResponse.json([
      { product: 'Pizza 1', amount: 6 },
      { product: 'Pizza 2', amount: 10 },
      { product: 'Pizza 3', amount: 16 },
      { product: 'Pizza 4', amount: 2 },
      { product: 'Pizza 5', amount: 7 },
    ])
  }
)