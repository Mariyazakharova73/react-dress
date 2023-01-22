import { RootState } from "./../store";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IDressSliceState, FetchDressesType, ICartItem } from "../../types/types";


// возвращаемый тип - ICartItem[], аргументы - FetchDressesType;
export const fetchDresses = createAsyncThunk<ICartItem[], FetchDressesType>(
  "dress/fetchDressesStatus",
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const res = await axios.get(
      `https://631cd2604fa7d3264cb78455.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );
    return res.data;
  }
);

const initialState: IDressSliceState = {
  items: [],
  status: "loading",
};

export const dressSlice = createSlice({
  name: "dress",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchDresses.pending]: (state) => {
      state.status = "loading";
      state.items = [];
    },
    [fetchDresses.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    [fetchDresses.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setItems } = dressSlice.actions;

export const selectDressData = (state: RootState) => state.dress;

export default dressSlice.reducer;
