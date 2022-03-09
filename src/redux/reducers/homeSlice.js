import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setDataHome(state, action) {
      return {
        ...state,
        home: action.payload,
      };
    },
    setTopSearch(state, action) {
      return {
        ...state,
        topSearch: action.payload,
      };
    },
  },
});

export const { setDataHome, setTopSearch } = homeSlice.actions;
export default homeSlice.reducer;
