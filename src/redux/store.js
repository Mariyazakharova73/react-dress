import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';
import cart from './slices/cartSlice';
import dress from './slices/dressSlice';

//configureStore создает хранилище
export const store = configureStore({
  reducer: { filter, cart, dress },
});
