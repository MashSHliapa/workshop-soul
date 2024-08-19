import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestRunes } from '../services/posts'

const fetchRunes = createAsyncThunk('runes/setRunes', async () => {
  return await requestRunes()
})

export const runes = createSlice({
  name: 'runes',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string
  },
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchRunes.pending, state => {
      state.loading = true
    })
    .addCase(fetchRunes.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
    .addCase(fetchRunes.rejected, state => {
      state.loading = false
      state.error = 'что-то не так'
    })
  }
})

export { fetchRunes }
export const runesReducer = runes.reducer
