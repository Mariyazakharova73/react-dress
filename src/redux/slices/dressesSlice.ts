import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDress } from "./../../types/types";
import { BASE_URL } from "../../utils/variables";
import axios from "axios";
import { RootState } from "../store";

//export type FetchDressesType = Record<string, string>;

export interface IDressesState {
  items: IDress[];
  status: string;
}

const initialState: IDressesState = {
  items: [],
  status: "loading", // success, error
};

export const fetchDresses = createAsyncThunk<any, any>(
  "dresses/fetchDresses",
  async ({ categoryNumber, sortBy, order, searchValue, currentPage }) => {
    const category = categoryNumber > 0 ? `category=${categoryNumber}` : "";

    const { data } = await axios.get(
      `${BASE_URL}?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}&search=${searchValue}`
    );
    return data;
  }
);

export const dressesSlice = createSlice({
  name: "dresses",
  initialState,
  reducers: {
    setDresses(state, action: PayloadAction<IDress[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    //@ts-ignore
    [fetchDresses.pending]: (state) => {
      state.status = "loading";
      //state.items = [];
    },
    //@ts-ignore
    [fetchDresses.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "success";
    },
    //@ts-ignore
    [fetchDresses.rejected]: (state) => {
      state.status = "error";
      state.items = [];
    },
  },
});

export const { setDresses } = dressesSlice.actions;

export default dressesSlice.reducer;

export const selectStatus = (state: RootState) => state.dresses.status;

export const selectDresses = (state: RootState) => state.dresses;
