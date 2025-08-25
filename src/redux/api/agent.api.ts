import { baseApi } from "./baseApi";
import type { CommissionResponse } from "@/types.type";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommission: builder.query<CommissionResponse, void>({
      query: () => ({
        url: "/com/agent-com",
        method: "GET",
      }),
      providesTags: ["Agent"],
    }),
  }),
});

export const { useGetCommissionQuery } = agentApi;
