import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { requestDecor } from '../services/posts';

export const fetchDecor = createAsyncThunk('decor/fetchDecor', async () => {
  return await requestDecor();
});

const decorSlice = createSlice({
  name: 'decor',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDecor.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDecor.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDecor.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const decorReducer = decorSlice.reducer;
