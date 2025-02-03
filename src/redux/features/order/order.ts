import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (orderInfo) => ({
        url: "/orders/create-order",
        method: "POST",
        body: orderInfo,
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: "/orders",
      }),
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: "/orders/verification",
        params: { order_id },
        method: "GET",
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useVerifyOrderQuery,
} = orderApi;
