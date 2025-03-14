import { http, HttpResponse } from "msw"

import { IGetMonthRevenue } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<never, never, IGetMonthRevenue>(
  '/metrics/month-receipt',
  () => {
    return HttpResponse.json({
      receipt: 20000,
      diffFromLastMonth: 10,
    })
  }
)