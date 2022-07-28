import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHotelInfo } from "../../types";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://module5.7t33n.ru/hotel",
  }),
  endpoints: (build) => ({
    searchHotels: build.query<IHotelInfo[], Record<string, string>>({
      query: (params) => ({
        method: "POST",
        url: "/filter",
        body: params,
      }),
    }),
  }),
});

export const { useSearchHotelsQuery } = hotelsApi;
