import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { requestDecor } from '../services/posts'

const fetchDecor = createAsyncThunk('decor/setDecorLogo', async () => {
  return await requestDecor()
})

export const decorSlice = createSlice({
  name: 'decor',
  initialState: {
    loading: false,
    error: null as null | string,
    data: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDecor.pending, state => {
        state.loading = true
      })
      .addCase(fetchDecor.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchDecor.rejected, state => {
        state.loading = false
        state.error = 'что-то не так'
      })
  }
})

export { fetchDecor }
export const decorReducer = decorSlice.reducer
