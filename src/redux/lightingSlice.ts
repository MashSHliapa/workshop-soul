import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestLighting } from '../services/posts';

export const fetchLighting = createAsyncThunk('lighting/fetchLighting', async () => {
  return await requestLighting();
});

export const lighting = createSlice({
  name: 'lighting',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLighting.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLighting.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLighting.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const lightingReducer = lighting.reducer;
