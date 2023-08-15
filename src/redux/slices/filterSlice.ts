import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SegmentedValue } from "antd/es/segmented";

export interface IFilterState {
  category: string | SegmentedValue;
  sort: { name: string; sortProperty: string };
  currentPage: number;
}

const initialState: IFilterState = {
  category: "Все",
  sort: {
    name: "популярности",
    sortProperty: "-rating",
  },
  currentPage: 1,
};

export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setSort(state, action: PayloadAction<any>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<any>) {
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
      state.category = action.payload.category;
    },
  },
});

export const { setCategory, setSort, setCurrentPage, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
