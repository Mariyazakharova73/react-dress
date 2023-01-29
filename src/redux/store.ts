import { configureStore } from "@reduxjs/toolkit";
import filter from "./slices/filterSlice";
import cart from "./slices/cartSlice";
import dress from "./slices/dressSlice";
import { useDispatch } from "react-redux";

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

export const store = configureStore({
  reducer: { filter, cart, dress },
});
