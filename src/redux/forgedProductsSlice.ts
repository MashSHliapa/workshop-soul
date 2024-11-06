import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestForgedProducts } from '../services/posts';

export const fetchForgetProducts = createAsyncThunk('forgedProducts/setForgedProducts', async () => {
  return await requestForgedProducts();
});

const forgedProducts = createSlice({
  name: 'forgedProducts',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchForgetProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchForgetProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchForgetProducts.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const forgedProductsReducer = forgedProducts.reducer;
