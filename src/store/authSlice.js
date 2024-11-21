// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    role: null,
    isAuthenticated: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.role = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

const initialState = {
  role: localStorage.getItem('role') || null,
  isAuthenticated: !!localStorage.getItem('role'),
};

export const { loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
