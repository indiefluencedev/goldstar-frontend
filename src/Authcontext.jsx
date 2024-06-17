import React, { createContext, useState, useEffect } from 'react';
import axios from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    const checkAuth = async () => {
        try {
            const response = await axios.get('/users/me');
            if (response.data) {
                setUser(response.data);
                setLoggedIn(true);
                console.log('User is logged in:', response.data);
            } else {
                setUser(null);
                setLoggedIn(false);
                console.log('User is not logged in');
            }
        } catch (error) {
            setUser(null);
            setLoggedIn(false);
            console.log('User is not logged in:', error);
        }
    };

    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, user, setLoggedIn, setUser, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
