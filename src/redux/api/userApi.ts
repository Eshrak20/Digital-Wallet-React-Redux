import type { ProfileResponse } from "@/types/user.type";
import { baseApi } from "./baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myProfile: builder.query<ProfileResponse, void>({
      query: () => ({
        url: "/user/my-profile",
        method: "GET",
      }),
      providesTags: ["User"], // caching support
    }),
  }),
});

export const { useMyProfileQuery } = userApi;
