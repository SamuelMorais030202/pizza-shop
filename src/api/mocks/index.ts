import { setupWorker } from 'msw/browser'
import { env } from '@/env'
import { signInMock } from './sign-in-mock'
import { registerRestaurantMock } from './register-restaurant-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getMonthCanceldOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getPopularProductsMock } from './get-popular-products-mocks'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { updateProfileMock } from './update-profile-mock'
import { approveOrderMock } from './approve-ordermock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthCanceldOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}