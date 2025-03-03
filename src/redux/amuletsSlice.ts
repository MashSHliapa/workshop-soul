import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestAmulets } from '../services/posts';

export const fetchAmulets = createAsyncThunk('amulets/fetchAmulets', async () => {
  return await requestAmulets();
});

const amulets = createSlice({
  name: 'amulets',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmulets.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAmulets.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchAmulets.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const { setAmulets } = amulets.actions;
export const amuletsReducer = amulets.reducer;
