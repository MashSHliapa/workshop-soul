// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestBijouterie } from '../services/posts'

import { createSlice } from '@reduxjs/toolkit'
import image1 from '../components/images/newitems/picture9.jpg'
import image2 from '../components/images/newitems/picture8.jpg'

// export const fetchBijouterie = createAsyncThunk('bijouterie/setBijouterie', async () => {
//   return await requestBijouterie()
// })

const bijouterieSlice = createSlice({
  name: 'bijouterie',
  initialState: {
    data: [
      {
        id: 1,
        image: image1,
        item: 'Серьги',
        name: '“Виток”',
        size: '30',
        material: 'натуральная кожа',
      },
      {
        id: 2,
        image: image2,
        item: 'Серьги',
        name: '“Близнецы”',
        size: '30',
        material: 'красная глина, глазурь',
      },
    ],
    // loading: false,
    // error: null as null | string
  },
  reducers: {
    setBijouterie(state, action) {
      state.data = action.payload
    }
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchBijouterie.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchBijouterie.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchBijouterie.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

export const bijouterieReducer = bijouterieSlice.reducer
