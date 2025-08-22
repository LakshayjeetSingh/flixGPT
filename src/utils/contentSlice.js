import { createSlice } from "@reduxjs/toolkit";

const contentSlice = createSlice({
  name: "content",
  initialState: {
    nowPlayingMovies: [],
    heroTrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addHeroTrailer: (state, action) => {
      state.heroTrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addHeroTrailer } = contentSlice.actions;
export default contentSlice.reducer;
