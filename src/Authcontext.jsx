import React, { createContext, useState, useEffect } from 'react';
import axios from './api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await axios.get('/users/me');
                if (response.data) {
                    setLoggedIn(true);
                    setUser(response.data);
                }
            } catch (error) {
                setLoggedIn(false);
                setUser(null);
            }
        };

        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, user, setLoggedIn, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
