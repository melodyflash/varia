import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import AccessibilityMenu from './AccessibilityMenu.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import BackgroundAura from './BackgroundAura.jsx';

export default function Layout({ children, context }) {
  const location = useLocation();

  useEffect(() => {
    const behavior = document.documentElement.classList.contains('a11y-reduceMotion') ? 'auto' : 'smooth';
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior, block: 'start' });
      }
    } else {
      window.scrollTo({ top: 0, behavior });
    }
  }, [location]);

  return (
    <div className="app-shell">
      <BackgroundAura />
      <Navbar />
      <main className="content" role="main">
        {children}
      </main>
      <Footer />
      <div className="floating-controls" aria-label="Display controls">
        <ThemeToggle theme={context.theme} onToggle={context.toggleTheme} />
        <AccessibilityMenu options={context.a11yOptions} onToggleOption={context.toggleAccessibilityOption} />
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  context: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    toggleTheme: PropTypes.func.isRequired,
    a11yOptions: PropTypes.shape({
      largeText: PropTypes.bool.isRequired,
      highContrast: PropTypes.bool.isRequired,
      reduceMotion: PropTypes.bool.isRequired
    }).isRequired,
    toggleAccessibilityOption: PropTypes.func.isRequired
  }).isRequired
};
