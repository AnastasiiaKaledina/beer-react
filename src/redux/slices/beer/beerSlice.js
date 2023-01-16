import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { beerAPI } from '../../../api/api';

export const fetchBeers = createAsyncThunk('data/fetchBeerData', async (params) => {
  const { pageNumber, searchString } = params;

  const response = await beerAPI.getBeer(pageNumber, searchString);
  return response.data;
});

const initialState = {
  beersData: [],
  status: 'loading',
};

export const beerSlice = createSlice({
  name: 'beer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBeers.pending, (state) => {
        state.beersData = [];
        state.status = 'loading';
      })
      .addCase(fetchBeers.fulfilled, (state, action) => {
        state.beersData = action.payload;
        state.status = 'success';
      })
      .addCase(fetchBeers.rejected, (state) => {
        state.beersData = [];
        state.status = 'error';
      });
  },
});

export const {} = beerSlice.actions;

export default beerSlice.reducer;
