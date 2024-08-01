import { createSlice } from '@reduxjs/toolkit'
import forged1 from '../components/images/newitems/picture5.jpg'

const forgedProducts = createSlice({
  name: 'forgedProducts',
  initialState: {
    data: [
      {
        id: '1',
        image: forged1,
        item: 'Кованые изделия',
        name: '“Красота”',
        size: '5x25',
        material: 'сталь ШХ 15; рукоять из дуба',
      },
      {
        id: '2',
        image: forged1,
        item: 'Кованые изделия',
        name: '“Красота”',
        size: '5x25',
        material: 'сталь ШХ 15; рукоять из дуба, сталь ШХ 15; рукоять из дуба',
      },
      {
        id: '3',
        image: forged1,
        item: 'Кованые изделия',
        name: '“Красота”',
        size: '5x25',
        material: 'сталь ШХ 15; рукоять из дуба, сталь ШХ 15; рукоять из дуба, сталь ШХ 15; рукоять из дуба',
      },
    ]
  },
  reducers: {
    setForgedProducts(state, action) {
      state.data = action.payload
    }
  }
})

export const { setForgedProducts } = forgedProducts.actions
export const forgedProductsReducer = forgedProducts.reducer
