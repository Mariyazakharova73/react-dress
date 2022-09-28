import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: 'rating',
  },
};

//{name: 'filter', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCaregoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});
console.log('filterSlice', filterSlice)

export const { setCaregoryId, setSort, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
