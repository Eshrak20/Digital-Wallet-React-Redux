import type { ProfileResponse } from "@/types/user.type";
import { baseApi } from "./baseApi";
import type { AllWalletApiResponse, TransactionApiResponse } from "@/types.type";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getYourTrans: builder.query<TransactionApiResponse, void>({
      query: () => ({
        url: "/trans/your-transactions",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getYourWallet: builder.query<AllWalletApiResponse, void>({
      query: () => ({
        url: "/wallet/my-wallet",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useMyProfileQuery,useGetYourTransQuery,useGetYourWalletQuery } = userApi;
