import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestTradeFairs } from '../services/posts';

export const fetchTradeFairs = createAsyncThunk('tradeFairs/fetchTradeFairs', async () => {
  return await requestTradeFairs();
});

const tradeFairsSlice = createSlice({
  name: 'tradeFairs',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTradeFairs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTradeFairs.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTradeFairs.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const tradeFairsReducer = tradeFairsSlice.reducer;
