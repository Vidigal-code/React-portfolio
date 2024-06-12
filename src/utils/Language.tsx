import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LanguageContextProps {
    selectedLanguage: string;
    handleLanguageChange: (languageCode: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }: LanguageProviderProps) => {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('pt');

    const handleLanguageChange = (languageCode: string) => {
        setSelectedLanguage(languageCode);
    };

    return (
        <LanguageContext.Provider value={{ selectedLanguage, handleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = (): LanguageContextProps => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
