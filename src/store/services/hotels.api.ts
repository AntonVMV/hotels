import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IHotelInfo, IHotelFullInfo } from "../../types";

export const hotelsApi = createApi({
  reducerPath: "hotelsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/hotels",
  }),
  endpoints: (build) => ({
    getHomeHotels: build.query<IHotelInfo[], string>({
      query: (resourse) => ({
        url: `/${resourse}`,
      }),
    }),
    getHotelInfo: build.query<IHotelFullInfo, string>({
      query: (id) => ({
        url: `/detail/${id}`,
      }),
    }),
    searchHotels: build.mutation<IHotelInfo[], Record<string, string>>({
      query: (params) => ({
        method: "POST",
        url: "/filter",
        body: params,
      }),
    }),
  }),
});

export const {
  useSearchHotelsMutation,
  useGetHotelInfoQuery,
  useGetHomeHotelsQuery,
} = hotelsApi;
