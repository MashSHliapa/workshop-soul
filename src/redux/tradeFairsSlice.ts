// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { requestTradeFairs } from '../services/posts'

import { createSlice } from '@reduxjs/toolkit';
import image1 from '../components/images/newitems/picture7.jpg';
import image2 from '../components/images/newitems/picture8.jpg';
import image3 from '../components/images/newitems/picture5.jpg';

// export const fetchTradeFairs = createAsyncThunk('tradeFairs/fetchTradeFairs', async () => {
//   return await requestTradeFairs()
// })

const tradeFairsSlice = createSlice({
  name: 'tradeFairs',
  initialState: {
    data: [
      {
        id: 1,
        title: 'ГорошекмаркетПро | Плюс',
        subtitle: 'в ТЦ МОМО (вход со двора)',
        ['date-pretext-from']: 'c',
        ['number-from']: '30',
        ['month-from']: 'сентября',
        ['date-pretext-to']: 'по',
        ['number-to']: '5',
        ['month-to']: 'октября',
        year: '2024',
        ['title-description']: 'Тёплый «Горошекмаркет»',
        ['subtitle-description']: '27 и 28 февраля в ТЦ МОМО на 2 этаже.',
        text1: 'Уютная встреча с любимыми мастерами, у которых вы найдёте множестводушевных вещиц ручной работы:',
        text2:
          'Обложки на документы из натуральной кожи с забавными изображениямисвечи из соевого воска и арома-диффузоры с оригинальными ароматамиигрушки из кожи и меха, дерева и текстиля, которые порадуют не только детей, но и взрослых пряники, мёд и домашний квас',
        ['date-description']: '27, 28 января 2024 года',
        ['time-description']: '10:00-22:00',
        ['adress-description']: '2 этаж ТЦ МОМО (пр-т Партизанский, 150А)',
        condition: 'вход свободный!',
        age: '0+',
        image: image1,
      },
      {
        id: 2,
        title: 'ГорошекмаркетПро + выставка',
        subtitle: 'в ТЦ «EXPOBELL» на 2 этаже',
        ['date-pretext-from']: '',
        ['number-from']: '5-10',
        ['month-from']: 'ноября',
        // ["date-pretext-to"]: '',
        // ["number-to"]: '',
        // ["month-to"]: '',
        year: '2024',
        ['title-description']: 'Тёплый «ГорошекмаркетПро»',
        ['subtitle-description']: 'с 5 по 10 ноября в в ТЦ «EXPOBELL» на 2 этаже.',
        text1: 'Уютная встреча с любимыми мастерами',
        text2: 'Обложки на документы из натуральной кожи с забавными изображениями свечи',
        ['date-description']: 'с 5 по 10 ноября 2024 года',
        ['time-description']: '10:00-22:00',
        ['adress-description']: 'в ТЦ «EXPOBELL» на 2 этаже',
        condition: 'Бесплатный вход только с картой VIP!',
        age: '16+',
        image: image2,
      },
      {
        id: 3,
        title: 'Выставка меда',
        subtitle: 'г, Минск, ул, Козлова, 3',
        ['date-pretext-from']: '',
        ['number-from']: '18',
        ['month-from']: 'августа',
        // ["date-pretext-to"]: '',
        // ["number-to"]: '',
        // ["month-to"]: '',
        year: '2024',
        ['title-description']: 'Выставка меда',
        ['subtitle-description']: 'Только 18 августа по адресу: Минск, ул, Козлова, 3',
        text1: 'Уютная встреча с любимыми мастерами, у которых вы найдёте множестводушевных вещиц ручной работы:',
        text2:
          'Обложки на документы из натуральной кожи с забавными изображениямисвечи из соевого воска и арома-диффузоры с оригинальными ароматамиигрушки из кожи и меха Обложки на документы из натуральной кожи с забавными изображениямисвечи из соевого воска и арома-диффузоры с оригинальными ароматамиигрушки из кожи и мехаОбложки на документы из натуральной кожи с забавными изображениямисвечи из соевого воска и арома-диффузоры с оригинальными ароматамиигрушки из кожи и меха',
        ['date-description']: '18 августа 2024 года',
        ['time-description']: '10:00-17:00',
        ['adress-description']: 'г, Минск, ул, Козлова, 3',
        condition: 'Вход свободный! + дегустация меда!!',
        age: '3+',
        image: image3,
      },
    ],
    // loading: false,
    // error: null as null | string,
  },
  reducers: {},
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchTradeFairs.pending, state => {
  //       state.loading = true
  //     })
  //     .addCase(fetchTradeFairs.fulfilled, (state, action) => {
  //       state.loading = false
  //       state.data = action.payload
  //     })
  //     .addCase(fetchTradeFairs.rejected, state => {
  //       state.loading = false
  //       state.error = 'что-то не так'
  //     })
  // }
});

export const tradeFairsReducer = tradeFairsSlice.reducer;
