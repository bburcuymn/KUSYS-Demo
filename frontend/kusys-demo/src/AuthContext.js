import React, { createContext, useState, useEffect } from 'react';

// AuthContext oluşturma
const AuthContext = createContext();

// AuthProvider bileşeni
const AuthProvider = ({ children }) => {
    // Kullanıcı oturum durumu ve yönetici durumu
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    // Sayfa yüklendiğinde kaydedilen oturum ve yönetici durumunu kontrol etme
    useEffect(() => {
        // localStorage'tan kaydedilen yönetici durumunu al
        const storedIsAdmin = localStorage.getItem('isAdmin');
        // Yönetici durumunu güncelle
        setIsAdmin(storedIsAdmin === 'true');
        // Eğer kaydedilen yönetici durumu varsa, oturum açıldı olarak işaretle
        setIsLoggedIn(storedIsAdmin !== null);
    }, []);

    // AuthContext değerini ayarlama fonksiyonu
    const setAuth = (isAdminValue, isLoggedInValue) => {
        // Yönetici durumunu güncelle
        setIsAdmin(isAdminValue);
        // Oturum durumunu güncelle
        setIsLoggedIn(isLoggedInValue);
        // Yönetici durumunu localStorage'a kaydet
        localStorage.setItem('isAdmin', isAdminValue);
    };

    return (
        <AuthContext.Provider value={{ isAdmin, isLoggedIn, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
