import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import LandingPage from './pages/LandingPage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import CaseStudiesPage from './pages/CaseStudiesPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

export const App = () => (
  <Layout>
    <Routes>
      <Route index element={<LandingPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  </Layout>
);

export default App;
