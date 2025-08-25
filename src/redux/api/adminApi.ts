import type {
  AllWalletApiResponse,
  CommissionResponse,
  TransactionApiResponse,
  UsersResponse,
  WalletApiResponse,
} from "@/types/admin.type";
import { baseApi } from "./baseApi";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query<UsersResponse, void>({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
    getAllAgent: builder.query<UsersResponse, void>({
      query: () => ({
        url: "/user/all-agents",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
    getAllTrans: builder.query<TransactionApiResponse, void>({
      query: () => ({
        url: "/trans/all-transactions",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
    getAllCommission: builder.query<CommissionResponse, void>({
      query: () => ({
        url: "/com/all-agent-com",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
    getAllWallet: builder.query<AllWalletApiResponse, void>({
      query: () => ({
        url: "/wallet/all-wallet",
        method: "GET",
      }),
      providesTags: ["Admin"],
    }),
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   createBlockWallet: builder.mutation<WalletApiResponse, { id: string; body: any }>({
    query: ({ id, body }) => ({
      url: `/wallet/${id}`,
      method: "PATCH",
      body,
  }),
  invalidatesTags: ["Admin"],
}),

  }),
});

export const {
  useGetAllUserQuery,
  useGetAllAgentQuery,
  useGetAllTransQuery,
  useGetAllCommissionQuery,
  useGetAllWalletQuery,
  useCreateBlockWalletMutation
} = adminApi;
