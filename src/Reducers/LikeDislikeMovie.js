import { createReducer } from "@reduxjs/toolkit";
const intitialState = {
};

export const likeDislike = createReducer(intitialState, {
  likeDislikeRequest: (state) => {
    state.loading = true;
  },
  likeDislikeSuccess: (state, action) => {
    state.loading = false;
    state.likeDislike = action.payload;
  },
  likeDislikeFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;

  },
  dislikeRequest: (state) => {
    state.loading = true;
  },
  dislikeSuccess: (state, action) => {
    state.loading = false;
    state.likeDislike = action.payload;
  },
  dislikeFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;

  },
  listingRequest: (state) => {
    state.loading = true;
  },
  listingSuccess: (state, action) => {
    state.loading = false;
    state.likeDislike = action.payload;
  },
  listingFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;

  },
  clearMessage: (state, action) => {
    state.likeDislike = null;
  },
});
