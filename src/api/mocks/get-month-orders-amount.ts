import { http, HttpResponse } from "msw"

import { IGetMonthOrdersAmount } from '../get-month-orders-amount'

export const getMonthOrdersAmountMock = http.get<never, never, IGetMonthOrdersAmount>(
  '/metrics/month-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 20,
      diffFromLastMonth: -5,
    })
  }
)