import { NavLink, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' },
];

const Header = ({ theme, setTheme }) => {
  return (
    <header className="site-header">
      <Link to="/" className="logo" aria-label="Variable Objects home">
        <AnimatedIcon name="logo" />
        <span className="logo-text">
          Variable <span>Objects</span>
        </span>
      </Link>
      <nav className="nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <div className="header-actions">
        <button
          type="button"
          className="theme-toggle button-ghost"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          <AnimatedIcon name={theme === 'dark' ? 'sun' : 'moon'} />
        </button>
        <a className="cta button-primary" href="#contact" role="button">
          <span>Let&apos;s Talk</span>
        </a>
      </div>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
};

export default Header;
