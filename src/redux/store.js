import { configureStore } from '@reduxjs/toolkit';
import beerSlice from './slices/beer/beerSlice';
import filterSlice from './slices/filter/filterSlice';

export const store = configureStore({
  reducer: {
    beer: beerSlice,
    filter: filterSlice
  },
});
