// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestDreamCathers } from '../services/posts'

import { createSlice } from '@reduxjs/toolkit';
import image1 from '../components/images/newitems/picture7.jpg';
import image2 from '../components/images/newitems/picture8.jpg';

// export const fetchDreamCatchers = createAsyncThunk('dreamCatchers/setDreamCatchers', async () => {
//   return await requestDreamCathers()
// })

const dreamCatchers = createSlice({
  name: 'dreamCatchers',
  initialState: {
    data: [
      {
        id: 1,
        image: image1,
        item: 'Ловец снов',
        name: '“Медведь”',
        size: '250 x 250',
        material: 'лоза, кожа натуральная',
      },
      {
        id: 2,
        image: image2,
        item: 'Ловец снов',
        name: '“Рыба”',
        size: '200 x 200',
        material: 'лоза, кожа натуральная',
      },
    ],
    // loading: false,
    // error: null as null | string
  },
  reducers: {
    setDreamCatchers(state, action) {
      state.data = action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder
  //   .addCase(fetchDreamCatchers.pending, state => {
  //     state.loading = true
  //   })
  //   .addCase(fetchDreamCatchers.fulfilled, (state, action) => {
  //     state.loading = false
  //     state.data = action.payload
  //   })
  //   .addCase (fetchDreamCatchers.rejected, state => {
  //     state.loading = false
  //     state.error = 'что-то не так'
  //   })
  // }
});

export const dreamCatchersReducer = dreamCatchers.reducer;
