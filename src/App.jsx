import { useEffect, useMemo, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import CaseStudies from './pages/CaseStudies.jsx';

const prefersDark = () => (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

export default function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('vo-theme') || (prefersDark() ? 'dark' : 'light');
  });
  const [a11yOptions, setA11yOptions] = useState(() => {
    if (typeof window === 'undefined') {
      return { largeText: false, highContrast: false, reduceMotion: false };
    }
    const stored = localStorage.getItem('vo-accessibility');
    return stored ? JSON.parse(stored) : { largeText: false, highContrast: false, reduceMotion: false };
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('vo-theme', theme);
  }, [theme]);

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(a11yOptions).forEach(([key, value]) => {
      if (value) {
        root.classList.add(`a11y-${key}`);
      } else {
        root.classList.remove(`a11y-${key}`);
      }
    });
    localStorage.setItem('vo-accessibility', JSON.stringify(a11yOptions));
  }, [a11yOptions]);

  useEffect(() => {
    const listener = (event) => {
      if (!localStorage.getItem('vo-theme')) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) {
      mq.addEventListener('change', listener);
      return () => mq.removeEventListener('change', listener);
    }
    mq.addListener(listener);
    return () => mq.removeListener(listener);
  }, []);

  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));

  const toggleAccessibilityOption = (option) => {
    setA11yOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

  const contextValue = useMemo(
    () => ({ theme, toggleTheme, a11yOptions, toggleAccessibilityOption }),
    [theme, a11yOptions]
  );

  return (
    <Layout context={contextValue}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  );
}
