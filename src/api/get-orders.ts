import { api } from "@/lib/axios";

interface iGetOrdersResponse {
  orders: {
    orderId: string;
    createdAt: string;
    status: "pending" | "canceled" | "processing" | "delivering" | "delivered";
    customerName: string;
    total: number;
  }[];
  meta: {
    pageIndex: number;
    perPage: number;
    totalCount: number;
  };
}

export interface IGetOrdersParams {
  pageIndex?: number | null;
}

export async function getOrders({ pageIndex }: IGetOrdersParams) {
  const response = await api.get<iGetOrdersResponse>('/orders', {
    params: {
      pageIndex,
    }
  })

  return response.data
}