import { http, HttpResponse } from "msw"

import { IGetMonthCanceledOrdersAmount } from '../get-month-canceled-orders-amount'

export const getMonthCanceldOrdersAmountMock = http.get<never, never, IGetMonthCanceledOrdersAmount>(
  '/metrics/month-canceled-orders-amount',
  () => {
    return HttpResponse.json({
      amount: 5,
      diffFromLastMonth: -5,
    })
  }
)