import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-two-alpha.vercel.app/api/" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/w1",
    credentials: "include",
  }),
  tagTypes: ["Auth","User"],
  endpoints: () => ({}),
});
