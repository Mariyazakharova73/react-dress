import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filterSlice';

//configureStore создает хранилище
export const store = configureStore({
  reducer: { filter },
});
