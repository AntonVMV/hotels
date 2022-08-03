import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IReserveForm } from "../../types";

export const reserveApi = createApi({
  reducerPath: "reserveApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://module5.7t33n.ru",
  }),
  endpoints: (build) => ({
    setReserve: build.mutation<IReserveForm, IReserveForm>({
      query: (data) => ({
        method: "POST",
        url: "/order",
        body: data,
      }),
    }),
  }),
});

export const { useSetReserveMutation } = reserveApi;
