import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IDress, IOrder,  SortPropertyEnum,  Status } from "./../../types/types";
import { BASE_URL } from "../../utils/variables";
import axios from "axios";
import { RootState } from "../store";

//export type FetchDressesType = Record<string, string>;

export interface IDressesState {
  items: IDress[];
  status: Status;
}

const initialState: IDressesState = {
  items: [],
  status: Status.LOADING,
};

type fetchDressesArgs = {
  categoryNumber: number;
  sortBy: SortPropertyEnum;
  order: IOrder;
  searchValue: string;
  currentPage: number;
};

export const fetchDresses = createAsyncThunk<IDress[], fetchDressesArgs>(
  "dresses/fetchDresses",
  async ({ categoryNumber, sortBy, order, searchValue, currentPage }) => {
    const category = categoryNumber > 0 ? `category=${categoryNumber}` : "";

    const { data } = await axios.get<IDress[]>(
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
  extraReducers: (builder) => {
    builder.addCase(fetchDresses.pending, (state) => {
      state.status = Status.LOADING;
      //state.items = [];
    });

    builder.addCase(fetchDresses.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchDresses.rejected, (state) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setDresses } = dressesSlice.actions;

export default dressesSlice.reducer;

export const selectStatus = (state: RootState) => state.dresses.status;

export const selectDresses = (state: RootState) => state.dresses;
