import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { LanguageProvider } from './utils/Language.jsx';
import { ThemeProvider } from './utils/ThemeLight.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <LanguageProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </LanguageProvider>
    </React.StrictMode>
);
