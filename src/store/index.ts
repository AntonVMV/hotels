import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "./slices/countriesSlice";
import { hotelsApi } from "./services/hotels.api";
import { reserveApi } from "./services/reserve.api";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    auth: authReducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
    [reserveApi.reducerPath]: reserveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApi.middleware, reserveApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
