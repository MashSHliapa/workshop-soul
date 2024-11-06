// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestTalismans } from '../services/posts'

import { createSlice } from '@reduxjs/toolkit';
import image1 from '../components/images/catalog/bijouterie.jpg';
import image2 from '../components/images/catalog/esoterics.jpg';

// export const fetchTalismans = createAsyncThunk('talismans/setTalismans', async () => {
//   return await requestTalismans()
// })

const talismans = createSlice({
  name: 'talismans',
  initialState: {
    data: [
      {
        id: 1,
        image: image1,
        item: 'Талисман',
        name: 'Карп',
        size: '50 x 20',
        material: 'красная глина',
        description: 'Карп олицетворяет мужественность, победу, стремление к цели и достижение результата',
      },
      {
        id: 2,
        image: image2,
        item: 'Талисман',
        name: 'Лада',
        size: '20 x 20',
        material: 'красная глина',
        description: 'Лада – богиня жизни и красоты, любви и семьи, рождения и плодородия',
      },
    ],
    // loading: false,
    // error: null as null | string
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchTalismans.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchTalismans.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchTalismans.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
});

export const talismansReducer = talismans.reducer;
