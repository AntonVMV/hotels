import { configureStore } from "@reduxjs/toolkit";
import CountriesReducer from "./slices/countriesSlice";
import { hotelsApi } from "./services/hotels.api";
import { userApi } from "./services/user.api";
import authReducer from "./slices/authSlice";

const store = configureStore({
  reducer: {
    countries: CountriesReducer,
    auth: authReducer,
    [hotelsApi.reducerPath]: hotelsApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hotelsApi.middleware, userApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
