// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(localStorage.getItem('role') || null);
  const navigate = useNavigate();

  const login = (userRole) => {
    setRole(userRole);
    localStorage.setItem('role', userRole);
    navigate(userRole === 'instructor' ? '/instructor/dashboard' : '/student/dashboard');
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
