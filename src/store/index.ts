import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "./slices/countriesSlice";

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
