import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import { AccessibilityProvider } from './context/AccessibilityContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AccessibilityProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AccessibilityProvider>
    </ThemeProvider>
  </React.StrictMode>
);
