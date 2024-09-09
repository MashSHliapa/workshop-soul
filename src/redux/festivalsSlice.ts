// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestFestivals } from '../services/posts'

import { createSlice } from "@reduxjs/toolkit"

// export const fetchFestivals = createAsyncThunk('festivals/fetchFestivals', async () => {
//   return await requestFestivals()
// })

const festivals = createSlice({
  name: 'festivals',
  initialState: {
    data: [],
    // loading: false,
    // error: null as null | string
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchFestivals.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchFestivals.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchFestivals.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

export const festivalsReducer = festivals.reducer
