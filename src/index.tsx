import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { LanguageProvider } from "./utils/Language.tsx";
import { ThemeProvider } from "./utils/ThemeLight.tsx";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <LanguageProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </LanguageProvider>
    </React.StrictMode>
  );
}
