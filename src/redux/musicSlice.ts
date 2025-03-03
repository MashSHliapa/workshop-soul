import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestMusic } from '../services/posts';

export const fetchMusic = createAsyncThunk('music/fetchMusic', async () => {
  return await requestMusic();
});

const music = createSlice({
  name: 'music',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusic.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMusic.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchMusic.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const musicReducer = music.reducer;
