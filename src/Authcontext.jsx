import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const { isAuthenticated, user, isLoading, loginWithRedirect, logout } = useAuth0();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            if (isAuthenticated) {
                setLoggedIn(true);
                console.log('User successfully logged in'); // Console log for successful login
               
            } else {
                setLoggedIn(false);
            }
        }
    }, [isAuthenticated, isLoading]);

    return (
        <AuthContext.Provider value={{ loggedIn, loginWithRedirect, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
