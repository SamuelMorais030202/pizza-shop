import { Helmet } from 'react-helmet-async'

import { Pagination } from '@/components/pagination'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { OrderTableFilters } from './order-table-filters'
import { OrderTableRow } from './order-table-row'
import { useQuery } from '@tanstack/react-query'
import { getOrders } from '@/api/get-orders'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

export function Orders() {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('page') ?? '1')

  const { data: result } = useQuery({
    queryKey: ['orders', pageIndex],
    queryFn: () => getOrders({ pageIndex }),
  })

  function handlePagination(pageIndex: number) {
    setSearchParams((state) => {
      state.set('page', (pageIndex + 1).toString())

      return state
    })
  }

  return (
    <>
      <Helmet title="Pedidos" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>

        <div className="space-y-2.5">
          <OrderTableFilters />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16"></TableHead>
                  <TableHead className="w-36">Identificador</TableHead>
                  <TableHead className="w-36">Realizado há</TableHead>
                  <TableHead className="w-36">Status</TableHead>
                  <TableHead className="">Cliente</TableHead>
                  <TableHead className="w-36">Total do pedido</TableHead>
                  <TableHead className="w-36"></TableHead>
                  <TableHead className="w-36"></TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {result && result.orders.map((order) => (
                  <OrderTableRow key={order.orderId} order={order} />
                ))}
              </TableBody>
            </Table>
          </div>

          {
            result && (
              <Pagination
                pageIndex={result.meta.pageIndex}
                perPage={result.meta.perPage}
                totalCount={result.meta.totalCount}
                onPageChange={handlePagination}
              />
            )
          }

        </div>
      </div>
    </>
  )
}
