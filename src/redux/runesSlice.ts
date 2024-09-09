// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestRunes } from '../services/posts'

import { createSlice } from "@reduxjs/toolkit"
import image1 from "../components/images/catalog/light.jpg"
import image2 from "../components/images/catalog/esoterics.jpg"

// export const fetchRunes = createAsyncThunk('runes/setRunes', async () => {
//   return await requestRunes()
// })

const runes = createSlice({
  name: 'runes',
  initialState: {
    data: [
      {
        id: 1,
        image: image1,
        item: 'Руна',
        name: '“Берегиня”',
        size: '50 x 50',
        material: 'лосиный рог',
        description: "Берегиня - это красота, забота, плодородие, развитие, мудрость, умение создавать уют, окружать любовью, чувствовать и анализировать"
      },
      {
        id: 2,
        image: image2,
        item: 'Руна',
        name: '“Леля”',
        size: '50 x 50',
        material: 'лосиный рог',
        description: "В отличии от Берегини, руна проявляет не материнские качества, а скорее те, что свойственны юной девушке в самом расцвете сил. Она уверена в себе, невероятно красивая, магнетически притягательная, обладает хорошей интуицией и привыкла брать от жизни то, что считает нужным. При приходе Лели человек может исполнить любое своё желание — достаточно лишь захотеть этого."
      },
    ],
    // loading: false,
    // error: null as null | string
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchRunes.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchRunes.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchRunes.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

export const runesReducer = runes.reducer
