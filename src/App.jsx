import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import CaseStudies from './pages/CaseStudies.jsx';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState('dark');
  const [accessibility, setAccessibility] = useState({
    largeText: false,
    highContrast: false,
    reduceMotion: false,
  });

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    document.body.dataset.largeText = accessibility.largeText;
    document.body.dataset.highContrast = accessibility.highContrast;
    document.body.dataset.reduceMotion = accessibility.reduceMotion;
  }, [accessibility]);

  useEffect(() => {
    scrollToTop();
  }, [location.pathname]);

  return (
    <Layout
      theme={theme}
      setTheme={setTheme}
      accessibility={accessibility}
      setAccessibility={setAccessibility}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
    </Layout>
  );
}

export default App;
