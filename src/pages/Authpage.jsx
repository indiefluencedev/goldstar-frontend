import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MetaTag from '../utils/meta';

const AuthPage = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MetaTag title="Login" />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {!isAuthenticated ? (
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6">Login</h2>
            <button onClick={() => loginWithRedirect()} className="bg-blue-500 text-white p-2 rounded">
              Sign in with Google
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-6">Welcome, {user.name}</h2>
            <button onClick={() => logout({ returnTo: window.location.origin })} className="bg-red-500 text-white p-2 rounded">
              Logout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default AuthPage;
