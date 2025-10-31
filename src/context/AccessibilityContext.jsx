import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AccessibilityContext = createContext({
  fontScale: 'base',
  highContrast: false,
  reduceMotion: false,
  setFontScale: () => {},
  setHighContrast: () => {},
  setReduceMotion: () => {},
});

export const AccessibilityProvider = ({ children }) => {
  const [fontScale, setFontScale] = useState(() => window.localStorage.getItem('vo-font-scale') || 'base');
  const [highContrast, setHighContrast] = useState(() => window.localStorage.getItem('vo-high-contrast') === 'true');
  const [reduceMotion, setReduceMotion] = useState(() => window.localStorage.getItem('vo-reduce-motion') === 'true');

  useEffect(() => {
    window.localStorage.setItem('vo-font-scale', fontScale);
    document.documentElement.setAttribute('data-font-scale', fontScale);
  }, [fontScale]);

  useEffect(() => {
    window.localStorage.setItem('vo-high-contrast', highContrast);
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    window.localStorage.setItem('vo-reduce-motion', reduceMotion);
    document.body.classList.toggle('reduced-motion', reduceMotion);
  }, [reduceMotion]);

  const value = useMemo(
    () => ({ fontScale, highContrast, reduceMotion, setFontScale, setHighContrast, setReduceMotion }),
    [fontScale, highContrast, reduceMotion]
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

export const useAccessibility = () => useContext(AccessibilityContext);
