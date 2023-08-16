import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import dressesSlice from "./slices/dressesSlice";
import filterSlice from "./slices/filterSlice";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
    dresses: dressesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
