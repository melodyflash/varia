import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext({ theme: 'dark', toggleTheme: () => {} });

const prefersDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('vo-theme');
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return prefersDark() ? 'dark' : 'dark';
  });

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      setTheme((prev) => {
        if (window.localStorage.getItem('vo-theme')) {
          return prev;
        }
        return event.matches ? 'dark' : 'light';
      });
    };
    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('vo-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('theme-light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
