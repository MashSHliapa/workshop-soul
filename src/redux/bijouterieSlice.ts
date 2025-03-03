import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { requestBijouterie } from '../services/posts';

export const fetchBijouterie = createAsyncThunk('bijouterie/fetchBijouterie', async () => {
  return await requestBijouterie();
});

const bijouterieSlice = createSlice({
  name: 'bijouterie',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBijouterie.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBijouterie.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBijouterie.rejected, (state) => {
        state.loading = false;
        state.error = 'что-то не так';
      });
  },
});

export const bijouterieReducer = bijouterieSlice.reducer;
