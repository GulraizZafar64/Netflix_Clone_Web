import { createReducer } from "@reduxjs/toolkit";
const intitialState = {
  isAuthenticated:false
};

export const userReducer = createReducer(intitialState, {
  loginRequest: (state) => {
    state.loading = true;
  },
  loginSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated=true
  },
  loginFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated=false

  },

  registerRequest: (state) => {
    state.loading = true;
  },
  registerSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated=true
  },
  registerFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated=false
  },
  clearError: (state, action) => {
    state.error = null;
  },
});
export const userProfileReducer = createReducer(intitialState, {
  loadUserRequest: (state) => {
    state.loading = true;
  },
  loadUserSuccess: (state, action) => {
    state.loading = false;
    state.user = action.payload;
    state.isAuthenticated=true
  },
  loadUserFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
    state.isAuthenticated=false
  },
  logoutUser: (state) => {
    state.isAuthenticated = false;
    state.loading = false;
  },
  clearError: (state, action) => {
    state.error = null;
  },
});
export const tokenReducer = createReducer(intitialState, {
  tokenRequest: (state) => {
    state.loading = true;
  },
  tokenSuccess: (state, action) => {
    state.loading = false;
    state.token = action.payload;
  },
  tokenFailure: (state, action) => {
    state.loading = false;
    state.error = action.payload;
  },
  clearError: (state, action) => {
    state.error = null;
  },
});
