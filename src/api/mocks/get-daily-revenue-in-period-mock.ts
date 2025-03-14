import { http, HttpResponse } from "msw"

import { IGetDailyRevenueInPeriod } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<never, never, IGetDailyRevenueInPeriod>(
  '/metrics/daily-receipt-in-period',
  () => {
    return HttpResponse.json([
      { date: '01/01/2024', receipt: 20000 },
      { date: '02/01/2024', receipt: 4000 },
      { date: '03/01/2024', receipt: 21200 },
      { date: '04/01/2024', receipt: 205700 },
      { date: '05/01/2024', receipt: 50060 },
      { date: '06/01/2024', receipt: 20000 },
    ])
  }
)