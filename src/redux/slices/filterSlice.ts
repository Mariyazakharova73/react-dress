import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFilterSliceState, ISort } from "../../types/types";
import { RootState } from "../store";

const initialState: IFilterSliceState = {
  searchValue: "",
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    sortProperty: "rating",
  },
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCaregoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<ISort>) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    // данные из адресной страки в state
    setFilters(state, action: PayloadAction<IFilterSliceState>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const { setCaregoryId, setSort, setCurrentPage, setFilters, setSearchValue } =
  filterSlice.actions;

export const selectSort = (state: RootState) => state.filter.sort;
export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;
