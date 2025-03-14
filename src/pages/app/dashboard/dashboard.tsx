import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount-card'
import { MonthCanceldOrdersAmountCard } from './month-canceled-orders-amount-card'
import { MonthOrdersAmountCard } from './month-orders-amount-card'
import { MonthRevenuCard } from './month-revenu-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <div>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenuCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceldOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </div>
  )
}
