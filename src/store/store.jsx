// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const preloadedState = {
  auth: {
    role: localStorage.getItem('role') || null,
    isAuthenticated: !!localStorage.getItem('role'),
  },
};

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  preloadedState, // Load trạng thái từ localStorage
});

export default store;
