import type { ProfileResponse } from "@/types/user.type";
import { baseApi } from "./baseApi";
import type { TransferResponse, WithdrawResponse } from "@/types/withdraw.type";
import type { AllWalletApiResponse, TransactionApiResponse } from "@/types/admin.type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    GetMyProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    UpdateMyProfile: builder.mutation<ProfileResponse, Record<string, string>>({
      query: (payload) => ({
        url: "/user/update-profile",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["User"],
    }),
  getYourTrans: builder.query<TransactionApiResponse, { page: number; limit: number; type?: string; startDate?: string; endDate?: string }>(
  {
    query: ({ page, limit, type, startDate, endDate }) => ({
      url: "/trans/your-transactions",
      method: "GET",
      params: { page, limit, type, startDate, endDate },
    }),
    providesTags: ["User"],
  }
),

    getYourWallet: builder.query<AllWalletApiResponse, void>({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    createWithdraw: builder.mutation<WithdrawResponse, void>({
      query: (body) => ({
        url: "/wallet/withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    createTransfer: builder.mutation<TransferResponse, void>({
      query: (body) => ({
        url: "/wallet/transfer-money",
        method: "POST",
        body,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetMyProfileQuery,
  useUpdateMyProfileMutation,
  useGetYourTransQuery,
  useGetYourWalletQuery,
  useCreateWithdrawMutation,
  useCreateTransferMutation,
} = userApi;
