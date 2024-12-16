import { createSlice } from '@reduxjs/toolkit';

// localStorage'dan kullanıcıyı alalım, varsa
const storedUser = localStorage.getItem("user");

const initialState = {
  currentUser: storedUser ? JSON.parse(storedUser) : null,
  isFetching: false,
  error: false,
  isLoggedIn: storedUser ? true : false, // Eğer storedUser varsa, giriş yapılmış kabul edilir
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
      state.isLoggedIn = true;

      const user = action.payload;
      if(user) {
        localStorage.getItem("user", JSON.stringify(user));
      }

    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
      // Çıkış yapıldığında localStorage'dan kullanıcıyı sil
      localStorage.removeItem("user");
    },
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.isLoggedIn = true;
      state.currentUser = action.payload;  
      // Kayıt işlemi başarılı olduğunda bilgileri localStorage'a kaydet
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    registerFailure: (state, action) => {
      state.isFetching = false;
      state.error = action.payload; // Error mesajını payload'dan alıyoruz
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
