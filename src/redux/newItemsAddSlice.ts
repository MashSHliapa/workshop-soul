// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestNewItemsAdd } from '../services/posts'

import { createSlice } from "@reduxjs/toolkit"
import newitems5 from '../components/images/newitems/picture5.jpg'
import image1 from '../../src/components/images/newitems/picture8.jpg'
import newitems1 from '../components/images/newitems/new_items1.png'
import newitems3 from '../components/images/newitems/picture7.jpg'

// export const fetchNewItemsAdd = createAsyncThunk('newItemsAdd/fetchNewItemsAdd', async () => {
//   return await requestNewItemsAdd()
// })

const newItemsAddSlice = createSlice({
  name: 'newItemsAdd',
  initialState: {
    data: [
      {
        id: 1,
        image: newitems5,
        item: 'Подвеска',
        name: '“ВАСИЛЁК”',
        size: '40x25',
        material: 'серебряная цепочка, природный камень и дерево хвойных пород',
      },
      {
        id: 2,
        image: image1,
        item: 'Подвеска',
        name: '“ВАСИЛЁК”',
        size: '80x45',
        material: 'серебряная цепочка, природный камень',
      },
      {
        id: 3,
        image: newitems1,
        item: 'Подвеска',
        name: '“ВАСИЛЁК”',
        size: '10x25',
        material: 'камень и дерево хвойных пород камень и дерево хвойных пород',
      },
      {
        id: 4,
        image: newitems3,
        item: 'Подвеска',
        name: '“ВАСИЛЁК”',
        size: '80x45',
        material: 'серебряная цепочка, природный камень',
      },
    ],
    // loading: false,
    // error: null as null | string
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchNewItemsAdd.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchNewItemsAdd.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchNewItemsAdd.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
})

export const newItemsAddReducer = newItemsAddSlice.reducer
