// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import { requestDecor } from '../services/posts'

import { createSlice } from '@reduxjs/toolkit';
import image1 from '../components/images/catalog/light.jpg';
import image2 from '../components/images/catalog/music.jpg';
import image3 from '../components/images/catalog/forged_products.jpg';

// export const fetchDecor = createAsyncThunk('decor/setDecorLogo', async () => {
//   return await requestDecor()
// })

const decorSlice = createSlice({
  name: 'decor',
  initialState: {
    data: [
      {
        id: 1,
        image: image1,
        item: 'Ваза',
        name: '“Солнце”',
        size: '50 x 50',
        material: 'шамотная глина, глазурь',
      },
      {
        id: 1,
        image: image2,
        item: 'Ваза',
        name: '“Вода”',
        size: '20 x 50',
        material: 'шамотная глина, глазурь',
      },
      {
        id: 3,
        image: image3,
        item: 'Ваза',
        name: '“Вода”',
        size: '20 x 50',
        material: 'шамотная глина, глазурь',
      },
    ],
    // loading: false,
    // error: null as null | string,
  },
  reducers: {
    setDecor(state, action) {
      state.data = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchDecor.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchDecor.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchDecor.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
});

export const decorReducer = decorSlice.reducer;
