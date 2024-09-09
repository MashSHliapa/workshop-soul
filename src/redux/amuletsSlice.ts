// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestAmulets } from '../services/posts'

import { createSlice } from '@reduxjs/toolkit'
import image1 from '../components/images/newitems/picture5.jpg'
import image2 from '../components/images/newitems/picture6.jpg'

// export const fetchAmulets = createAsyncThunk('amulets/setAmulets', async () => {
//   return await requestAmulets()
// })

const amulets = createSlice({
  name: 'amulets',
  initialState: {
    data: [
      {
        id: 1,
        image: image1,
        item: 'Оберег',
        name: '“Макошь”',
        size: '60',
        material: 'красная глина, глазурь',
        description: 'Для достатка в доме и женского счастья',
      },
      {
        id: 2,
        image: image2,
        item: 'Оберег',
        name: '“Чур”',
        size: '60',
        material: 'красная глина, глазурь',
        description: 'Вешается над входной дверью, от злых людей и негатива',
      },
    ],
    // loading: false,
    // error: null as null | string
  },
  reducers: {
    setAmulets(state, action) {
      state.data = action.payload
    }
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchAmulets.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchAmulets.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchAmulets.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

export const { setAmulets } = amulets.actions
export const amuletsReducer = amulets.reducer
