import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    accessToken: null,
    isFetching: false,
    isLoggedIn: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
    },
    loginFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload; 
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = null;
      state.currentUser = null;
    },
    // Register reducers
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true; 
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload; 
    },
    updateUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateUserSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload; 
    },
    updateUserFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload; 
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  registerStart,
  registerSuccess,
  registerFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
} = userSlice.actions;

export default userSlice.reducer;
