import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageNumber: 1,
  searchString: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    setFilter: (state, action) => {
      state.pageNumber = Number(action.payload.pageNumber);
      action.payload.search
        ? (state.searchString = action.payload.search)
        : (state.searchString = '');
    },
  },
});

export const { setPageNumber, setSearchString, setFilter } = filterSlice.actions;

export default filterSlice.reducer;
