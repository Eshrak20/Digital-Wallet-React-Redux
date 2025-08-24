import { baseApi } from "./baseApi";
import type { TransactionApiResponse, UsersResponse } from "@/types/admin.type";

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
  }),
});

export const { useGetAllUserQuery, useGetAllAgentQuery,useGetAllTransQuery } = adminApi;
