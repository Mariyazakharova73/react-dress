import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  sortType: {
    name: 'популярности',
    sortProperty: 'raiting',
  },
  currentPage: 1,
};

//{name: 'filters', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCaregoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSortType(state, action) {
      state.sortType = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const { setCaregoryId, setSortType, setCurrentPage } = filterSlice.actions;

export default filterSlice.reducer;
