import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon } from './Icon.jsx';
import { useTheme } from '../context/ThemeContext.jsx';
import { useAccessibility } from '../context/AccessibilityContext.jsx';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

const NAV_ID = 'primary-navigation';

export const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();
  const { fontScale, setFontScale, highContrast, setHighContrast, reduceMotion, setReduceMotion } =
    useAccessibility();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleFontScaleChange = () => {
    if (fontScale === 'base') setFontScale('large');
    else if (fontScale === 'large') setFontScale('xlarge');
    else setFontScale('base');
  };

  return (
    <div className="app-shell">
      <nav className="site-nav" aria-label="Main navigation">
        <div className="nav-wrapper">
          <Link className="brand" to="/">
            <span className="brand-mark" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#5b8dff" />
                    <stop offset="100%" stopColor="#38e8d3" />
                  </linearGradient>
                </defs>
                <path d="M5 6l4 12 3-6 3 6 4-12" stroke="url(#brandGradient)" strokeWidth="1.5" fill="none" />
              </svg>
            </span>
            <span>Variable Objects</span>
          </Link>
          <button
            className="control-button menu-toggle"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls={NAV_ID}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} />
            <span>Menu</span>
          </button>
          <div id={NAV_ID} className="nav-links" data-open={isMenuOpen}>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="nav-controls">
            <button type="button" className="control-button" onClick={toggleTheme}>
              <Icon name="spark" />
              <span>{theme === 'dark' ? 'Light' : 'Dark'} mode</span>
            </button>
            <button type="button" className="control-button" onClick={handleFontScaleChange}>
              <Icon name="waves" />
              <span>Type {fontScale}</span>
            </button>
            <button type="button" className="control-button" onClick={() => setHighContrast((prev) => !prev)}>
              <Icon name="analytics" />
              <span>{highContrast ? 'Standard contrast' : 'High contrast'}</span>
            </button>
            <button type="button" className="control-button" onClick={() => setReduceMotion((prev) => !prev)}>
              <Icon name="sensor" />
              <span>{reduceMotion ? 'Motion on' : 'Motion off'}</span>
            </button>
          </div>
        </div>
      </nav>
      <main id="main">{children}</main>
      <footer>
        <div className="footer-grid">
          <div>
            <h3>Variable Objects</h3>
            <p className="footer-note">
              Ocean Beach, San Diego studio weaving sculptural tech, ethical data, and community-driven IoT journeys for the
              West Coast and beyond.
            </p>
          </div>
          <div>
            <h4>Connect</h4>
            <p>
              <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a>
              <br />
              <a href="tel:16196636363">619 663 6363</a>
            </p>
            <div className="social-links">
              <a className="social-link" href="https://instagram.com" aria-label="Instagram">
                <Icon name="light" />
              </a>
              <a className="social-link" href="https://linkedin.com" aria-label="LinkedIn">
                <Icon name="analytics" />
              </a>
              <a className="social-link" href="https://behance.net" aria-label="Behance">
                <Icon name="artifact" />
              </a>
            </div>
          </div>
          <div>
            <h4>Studio Hours</h4>
            <p className="footer-note">
              Mon–Fri 9a–6p PT
              <br />
              Weekends by appointment
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
