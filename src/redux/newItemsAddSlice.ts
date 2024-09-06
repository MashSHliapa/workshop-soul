import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { requestNewItemsAdd } from '../services/posts'

export const fetchNewItemsAdd = createAsyncThunk('newItemsAdd/fetchNewItemsAdd', async () => {
  return await requestNewItemsAdd()
})

const newItemsAddSlice = createSlice({
  name: 'newItemsAdd',
  initialState: {
    data: [],
    loading: false,
    error: null as null | string
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchNewItemsAdd.pending, state => {
        state.loading = true
      })
      .addCase(fetchNewItemsAdd.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
      })
      .addCase(fetchNewItemsAdd.rejected, state => {
        state.loading = false
        state.error = 'что-то не так'
      })
  }
})

export const newItemsAddReducer = newItemsAddSlice.reducer
