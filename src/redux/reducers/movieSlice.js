import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
  name: 'movie',
  initialState: {},
  reducers: {
    setDataMovieDetail(state, action) {
      return {
        ...state,
        movieDetail: action.payload,
      };
    },
    fetchDetail(state) {
      return {
        ...state,
      };
    },
  },
});

export const { setDataMovieDetail, fetchDetail } = movieSlice.actions;

export default movieSlice.reducer;
