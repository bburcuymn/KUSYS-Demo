import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const storedIsAdmin = localStorage.getItem('isAdmin');
        setIsAdmin(storedIsAdmin === 'true');
        setIsLoggedIn(storedIsAdmin !== null);
    }, []);

    const setAuth = (isAdminValue, isLoggedInValue) => {
        setIsAdmin(isAdminValue);
        setIsLoggedIn(isLoggedInValue);
        localStorage.setItem('isAdmin', isAdminValue);
    };

    return (
        <AuthContext.Provider value={{ isAdmin, isLoggedIn, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
