import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { to: '/', label: 'Installations' },
  { to: '/services', label: 'Services' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/about', label: 'About' }
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <NavLink to="/" className="logo" aria-label="Variable Objects home">
        <motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="logo-symbol">
          VO
        </motion.span>
        <motion.span initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
          Variable Objects
        </motion.span>
      </NavLink>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}
              >
                <span>{link.label}</span>
                {location.pathname === link.to && (
                  <motion.span layoutId="nav-active" className="nav-active-indicator" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <Link className="cta-button" to="/#contact">
        Start a Project
        <motion.span className="cta-border" layout transition={{ duration: 0.35, ease: 'easeInOut' }} />
      </Link>
    </header>
  );
}
