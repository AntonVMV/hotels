import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios";

interface ICountriesState {
  countries: string[];
  loading: boolean;
  error: string | null;
}

export const fetchCountries = createAsyncThunk<
  string[],
  undefined,
  { rejectValue: string }
>("countries/fetchCountries", async (_, { rejectWithValue }) => {
  try {
    const result = await axiosInstance.get<{ name: string }[]>(
      "/hotels/location"
    );

    return result.data.map((item) => item.name).sort();
  } catch (e) {
    return rejectWithValue(e instanceof Error ? e.message : "Server Error");
  }
});

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
        if (action.payload) {
          state.error = action.payload;
        }
      });
  },
});

export default CountriesSlice.reducer;
