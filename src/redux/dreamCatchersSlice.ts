import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestDreamCathers } from '../services/posts'

export const fetchDreamCatchers = createAsyncThunk('dreamCatchers/setDreamCatchers', async () => {
  return await requestDreamCathers()
})

const dreamCatchers = createSlice({
  name: 'dreamCatchers',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchDreamCatchers.pending, state => {
      state.loading = true
    })
    .addCase(fetchDreamCatchers.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase (fetchDreamCatchers.rejected, state => {
      state.loading = false
      state.error = 'что-то не так'
    })
  }
})

export const dreamCatchersReducer = dreamCatchers.reducer
