import { baseApi } from "./baseApi";
import type {
  AllWalletApiResponse,
  CommissionResponse,
  TransactionApiResponse,
  UsersResponse,
} from "@/types.type";

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
  }),
});

export const {
  useGetAllUserQuery,
  useGetAllAgentQuery,
  useGetAllTransQuery,
  useGetAllCommissionQuery,
  useGetAllWalletQuery,
} = adminApi;
