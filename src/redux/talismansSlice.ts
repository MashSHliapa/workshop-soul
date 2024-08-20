import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestTalismans } from '../services/posts'

export const fetchTalismans = createAsyncThunk('talismans/setTalismans', async () => {
  return await requestTalismans()
})

const talismans = createSlice({
  name: 'talismans',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTalismans.pending, state => {
        state.loading = true
      })
      .addCase(fetchTalismans.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchTalismans.rejected, state => {
        state.loading = false
        state.error = 'что-то не так'
      })
  }
})

export const talismansReducer = talismans.reducer
