import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api'; // Use the configured axios instance
import AuthContext from '../AuthContext';

const AuthPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);
  const navigate = useNavigate();

  const { loggedIn, user, setUser, setLoggedIn, checkAuth } = useContext(AuthContext);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/register', { name, email, password });
      setUser(response.data);
      setLoggedIn(true);
      console.log('Registration successful:', response.data);
      alert('Registration successful. You are now logged in.');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Registration error:', error.response ? error.response.data : error.message);
      alert('Registration failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/users/login', { email, password });
      setUser(response.data);
      setLoggedIn(true);
      console.log('Login successful:', response.data);
      alert('Login successful.');
      navigate('/'); // Redirect to home page
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      alert('Login failed. Please check your credentials and try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await axios.get('/users/logout');
      setUser(null);
      setLoggedIn(false);
      console.log('User logged out');
      alert('Logout successful.');
      navigate('/auth'); // Redirect to auth page
    } catch (error) {
      console.error('Logout error:', error.response ? error.response.data : error.message);
      alert('Logout failed. Please try again.');
    } finally {
      checkAuth(); // Ensure we check the auth state again
    }
  };

  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {!loggedIn ? (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          {isRegistering ? (
            <>
              <h2 className="text-2xl font-bold mb-6">Register</h2>
              <form onSubmit={handleRegister} className="space-y-4">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                  Register
                </button>
              </form>
              <p className="mt-4 text-center">
                Already have an account?{' '}
                <button onClick={toggleAuthMode} className="text-blue-500 underline">
                  Login here
                </button>
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-bold mb-6">Login</h2>
              <form onSubmit={handleLogin} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                  Login
                </button>
              </form>
              <p className="mt-4 text-center">
                Don't have an account?{' '}
                <button onClick={toggleAuthMode} className="text-blue-500 underline">
                  Register here
                </button>
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-6">Welcome, {user ? user.name : ''}</h2>
          <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default AuthPage;
