import { createSlice } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {},
  reducers: {
    fetchMovie(state) {
      return {
        ...state,
      };
    },
    setDataHome(state, action) {
      return {
        ...state,
        homeData: action.payload,
      };
    },
  },
});

export const { fetchMovie, setDataHome } = homeSlice.actions;

export default homeSlice.reducer;
