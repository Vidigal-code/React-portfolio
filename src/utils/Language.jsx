import React, { createContext, useContext, useState } from 'react';

const Language = createContext();

export const LanguageProvider = ({ children }) => {
    const [selectedLanguage, setSelectedLanguage] = useState('pt');

    const handleLanguageChange = (languageCode) => {
        setSelectedLanguage(languageCode);
    };

    return (
        <Language.Provider value={{ selectedLanguage, handleLanguageChange }}>
            {children}
        </Language.Provider>
    );
};

export const useLanguage = () => {
    return useContext(Language);
};
