import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <motion.button
      type="button"
      className="icon-button"
      onClick={onToggle}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle dark and light mode"
    >
      {theme === 'dark' ? '🌙' : '🌞'}
    </motion.button>
  );
}

ThemeToggle.propTypes = {
  theme: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};
