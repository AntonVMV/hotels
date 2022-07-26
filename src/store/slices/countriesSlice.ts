import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ICountriesState {
  countries: string[];
  loading: boolean;
  error: string | null;
}

export const fetchCountries = createAsyncThunk<string[]>(
  "countries/fetchCountries",
  async (_, { rejectWithValue }) => {
    try {
      const result = await axios.get<{ name: string }[]>(
        "https://module5.7t33n.ru/hotel/location"
      );

      return result.data.map((item) => item.name);
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      } else {
        return rejectWithValue("Unknown error");
      }
    }
  }
);

const initialState: ICountriesState = {
  countries: [],
  loading: false,
  error: null,
};

const CountriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCountries.fulfilled, (state, action) => {
        state.countries = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCountries.rejected, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      });
  },
});

export default CountriesSlice.reducer;
