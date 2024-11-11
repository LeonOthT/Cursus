// src/context/AuthContext.js
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess, logout as logoutAction } from '../store/authSlice';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (email, password) => {
    try {
      const response = await fetch('https://66938e63c6be000fa07c14dd.mockapi.io/trieuOTHse173617');
      const users = await response.json();

      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        dispatch(loginSuccess(user.role)); // Update Redux store
        localStorage.setItem('role', user.role); // Persist role in local storage
        navigate('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    }
  };

  const logout = () => {
    dispatch(logoutAction());
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ login, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};
