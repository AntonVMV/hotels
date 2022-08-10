import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ILogin, IRegister, IUser } from "../../types";
import { AxiosError } from "axios";
import { authAxiosInstance } from "../../utils/axios";

interface IAuthState {
  data: IUser | null;
  loading: boolean;
  error: null | string;
}

const initialState: IAuthState = {
  data: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk<
  IUser,
  IRegister,
  { rejectValue: string }
>("auth/registerUser", async (formData, { rejectWithValue }) => {
  try {
    const { data } = await authAxiosInstance.post<IUser>("/register", formData);

    if (data.token) {
      localStorage.setItem("HOTELS_AUTH_TOKEN", data.token);
    }

    return data;
  } catch (e) {
    return rejectWithValue(
      e instanceof AxiosError ? e.response?.data.message : "Unknown Error"
    );
  }
});

export const loginUser = createAsyncThunk<
  IUser,
  ILogin,
  { rejectValue: string }
>("auth/loginUser", async (formData, { rejectWithValue }) => {
  try {
    const { data } = await authAxiosInstance.post<IUser>("/login", formData);

    if (data.token) {
      localStorage.setItem("HOTELS_AUTH_TOKEN", data.token);
    }

    return data;
  } catch (e) {
    return rejectWithValue(
      e instanceof AxiosError ? e.response?.data.message : "Unknown Error"
    );
  }
});

export const getUser = createAsyncThunk<
  IUser,
  undefined,
  { rejectValue: string }
>("auth/getUser", async (_, { rejectWithValue }) => {
  try {
    const { data } = await authAxiosInstance.get<IUser>("/getme");

    return data;
  } catch (e) {
    return rejectWithValue("");
  }
});

const requests = [registerUser, loginUser, getUser];

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    requests.forEach((request) => {
      builder
        .addCase(request.pending, (state) => {
          state.error = null;
          state.loading = true;
        })
        .addCase(request.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(request.rejected, (state, action) => {
          state.loading = false;
          if (action.payload) {
            state.error = action.payload;
          }
        });
    });
  },
});

export const { clearError, logout } = authSlice.actions;

export default authSlice.reducer;
