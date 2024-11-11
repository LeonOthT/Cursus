// src/pages/Login.js
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';


function Login() {
  const { login, error } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <div className="flex justify-center mb-8">
          <img src="https://gambolthemes.net/html-items/cursus-landing-page/images/main_logo.svg" alt="Cursus" className="w-24 h-auto" />
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-6">Log In to Your Cursus Account!</p>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

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
