import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SegmentedValue } from "antd/es/segmented";
import { RootState } from "../store";
import { IDress, SortPropertyEnum } from "../../types/types";
import { ISort } from "./../../types/types";

export interface IFilterState {
  category: string | SegmentedValue;
  sort: ISort;
  currentPage: number;
  searchValue: string;
}

const initialState: IFilterState = {
  category: "Все",
  sort: {
    name: "популярности",
    sortProperty: SortPropertyEnum.RATING_ASC,
  },
  currentPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<ISort>) {
      state.sort = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IFilterState>) {
      state.currentPage = action.payload.currentPage;
      state.sort = action.payload.sort;
      state.category = action.payload.category;
    },
  },
});

export const { setCategory, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export default filterSlice.reducer;

export const selectCategory = (state: RootState) => state.filter.category;
export const selectCurrentPage = (state: RootState) => state.filter.currentPage;
export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;
export const selectCartItem = (item: IDress) => (state: RootState) =>
  state.cart.cartItems.find((d) => d.id === item.id);
