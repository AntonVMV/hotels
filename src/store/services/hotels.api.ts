import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHotelInfo, IHotelFullInfo } from "../../types";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://module5.7t33n.ru/hotel",
  }),
  endpoints: (build) => ({
    getHomeHotels: build.query<IHotelInfo[], string>({
      query: (resourse) => ({
        url: `/${resourse}`,
      }),
    }),
    searchHotels: build.query<IHotelInfo[], Record<string, string>>({
      query: (params) => ({
        method: "POST",
        url: "/filter",
        body: params,
      }),
    }),
    getHotelInfo: build.query<IHotelFullInfo, string>({
      query: (id) => ({
        url: `detail/${id}`,
      }),
    }),
  }),
});

export const {
  useSearchHotelsQuery,
  useGetHotelInfoQuery,
  useGetHomeHotelsQuery,
} = hotelsApi;
