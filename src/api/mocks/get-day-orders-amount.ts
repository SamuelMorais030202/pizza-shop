import { http, HttpResponse } from "msw"

import { IGetDayOrdersAmount } from '../get-day-orders-amount'

export const getDayOrdersAmountMock = http.get<never, never, IGetDayOrdersAmount>(
  '/metrics/day-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 20,
      diffFromYesterday: -5,
    })
  }
)