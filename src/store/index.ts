import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "./slices/countriesSlice";
import { hotelsApi } from "./services/hotels.api";

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
