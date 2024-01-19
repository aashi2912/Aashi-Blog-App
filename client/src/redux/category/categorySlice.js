import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
};

export const FetchAllCategories = createAsyncThunk(
  "fetchAllCategories",
  async (data, thunkApi) => {
    try {
      const res = await fetch("/api/category/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error?.response?.data);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchAllCategories.pending, (state) => {
        state.isLoading = true;
        state.categories = [];
      })
      .addCase(FetchAllCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action?.payload ?? [];
      })
      .addCase(FetchAllCategories.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default categorySlice.reducer;
