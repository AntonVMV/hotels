import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReserveForm, IHotelFullInfo, IUser } from "../../types";

export const userApi = createApi({
  reducerPath: "userApi",
  tagTypes: ["Favorites"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3002/api/user",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("HOTELS_AUTH_TOKEN");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (build) => ({
    setReserve: build.mutation<IReserveForm, IReserveForm>({
      query: (data) => ({
        method: "POST",
        url: "/reserve",
        body: data,
      }),
    }),
    addToFavorites: build.mutation<string[], string>({
      query: (id) => ({
        method: "POST",
        url: "/addToFav",
        body: { id },
      }),
      invalidatesTags: ["Favorites"],
    }),
    getFavorites: build.query<IHotelFullInfo[], void>({
      query: () => ({
        method: "GET",
        url: "/favorites",
      }),
      providesTags: ["Favorites"],
    }),
    removeFromFavorites: build.mutation<IUser, string>({
      query: (id) => ({
        method: "DELETE",
        url: "/removeFav",
        body: {
          id,
        },
      }),
      invalidatesTags: ["Favorites"],
    }),
  }),
});

export const {
  useSetReserveMutation,
  useAddToFavoritesMutation,
  useGetFavoritesQuery,
  useRemoveFromFavoritesMutation,
} = userApi;
