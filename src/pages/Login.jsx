// src/pages/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded accounts
    const accounts = {
      Instructor1: { password: '123456', role: 'instructor' },
      Student1: { password: '123456', role: 'student' },
    };

    // Check if the account exists and password matches
    if (accounts[email] && accounts[email].password === password) {
      login(accounts[email].role); // Set role and navigate
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-8">
          <img src="https://gambolthemes.net/html-items/cursus-landing-page/images/main_logo.svg" alt="Cursus" className="w-24 h-auto" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Log In to Your Cursus Account!</p>

        {/* Show error message if login fails */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        {/* Login form */}
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-red-500 hover:underline">Forgot Password?</a>
          </div>
          <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600">Sign In</button>
        </form>

        {/* Sign up link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
