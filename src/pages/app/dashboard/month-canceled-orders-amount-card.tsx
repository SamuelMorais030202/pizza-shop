import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceldOrdersAmountCard() {
  return (
    <Card className="bg-transparent">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos (mês)
        </CardTitle>
        <DollarSign className="size-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">31 </span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-700 dark:text-emerald-400">-3%</span> em
          relação ao mês passado
        </p>
      </CardContent>
    </Card>
  )
}
