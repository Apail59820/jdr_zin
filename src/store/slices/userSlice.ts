import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserModel } from "../../models/UserModel";

interface UserState {
  user: Partial<UserModel> | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
};

export const fetchActiveUser = createAsyncThunk(
  "user/fetchActiveUser",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/users/active`,
    );
    return response.data;
  },
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUser(state) {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
    updateUserSlice(state, action) {
      state.user = {
        ...state.user,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchActiveUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchActiveUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchActiveUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch active user";
      });
  },
});

export const { clearUser, updateUserSlice } = userSlice.actions;
export default userSlice.reducer;
