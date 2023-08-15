import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICartDress } from "../../types/types";
import { getTotalPrice } from "../../utils/helpers";

export interface ICartState {
  cartItems: ICartDress[];
  totalPrice: number;
}

const initialState: ICartState = {
  cartItems: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // addItem(state, action: PayloadAction<ICartDress>) {
    //   state.items.push(action.payload);
    //   state.totalPrice = state.items.reduce((sum, item) => {
    //     return item.price + sum;
    //   }, 0);
    // },

    addItem(state, action: PayloadAction<ICartDress>) {
      const findItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.cartItems.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = getTotalPrice(state.cartItems);
    },
    removeItem(state, action: PayloadAction<ICartDress>) {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
      state.totalPrice = getTotalPrice(state.cartItems);
    },
    clearItems(state) {
      state.cartItems = [];
      state.totalPrice = 0;
    },
    minusItem(state, action: PayloadAction<ICartDress>) {
      const findItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = getTotalPrice(state.cartItems);
    },
  },
});

export const { addItem, removeItem, minusItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
