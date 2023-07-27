import { createReducer } from "@reduxjs/toolkit";
const intitialState = {
  isAuthenticated:false
};

export const movies = createReducer(intitialState, {
  trendingMoviesRequest: (state) => {
    state.loading = true;
  },
  trendingMoviesSuccess: (state, action) => {
    state.loading = false;
    state.trending = action.payload;
  },
  trendingMoviesFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;

  },

  newReleasesRequest: (state) => {
    state.loading = true;
  },
  newReleasesSuccess: (state, action) => {
    state.loading = false;
    state.newReleased = action.payload;
  },
  newReleasesFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  BlockbusterRequest: (state) => {
    state.loading = true;
  },
  BlockbusterSuccess: (state, action) => {
    state.loading = false;
    state.buster = action.payload;
  },
  BlockbusterFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  popularRequest: (state) => {
    state.loading = true;
  },
  popularSuccess: (state, action) => {
    state.loading = false;
    state.popular = action.payload;
  },
  popularFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },

});
