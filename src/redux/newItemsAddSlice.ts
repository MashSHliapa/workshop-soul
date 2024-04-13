import { createSlice } from '@reduxjs/toolkit'
import newitems5 from '../components/images/newitems/picture5.jpg'
import image1 from '../../src/components/images/newitems/picture8.jpg'
import newitems1 from '../components/images/newitems/new_items1.png'
import newitems3 from '../components/images/newitems/picture7.jpg'

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
  },
  reducers: {
    setNewItemsAdd(state, action) {
      state.data = action.payload
    }
  }
})

export const { setNewItemsAdd } = newItemsAddSlice.actions
export const newItemsAddReducer = newItemsAddSlice.reducer

