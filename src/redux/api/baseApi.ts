import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/w1",
    baseUrl: "https://digital-wallet-express.vercel.app/api/w1",

    credentials: "include",
  }),
  tagTypes: ["Admin","User","Agent","Auth"],
  endpoints: () => ({}),
});
