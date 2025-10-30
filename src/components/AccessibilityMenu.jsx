import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const optionsConfig = [
  { key: 'largeText', label: 'Larger text', description: 'Boosts base font size for readability.' },
  { key: 'highContrast', label: 'High contrast', description: 'Increases contrast for improved legibility.' },
  { key: 'reduceMotion', label: 'Reduce motion', description: 'Tones down non-essential animations.' }
];

export default function AccessibilityMenu({ options, onToggleOption }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`accessibility-menu ${open ? 'is-open' : ''}`}>
      <motion.button
        type="button"
        className="icon-button"
        onClick={() => setOpen((prev) => !prev)}
        whileTap={{ scale: 0.94 }}
        aria-expanded={open}
        aria-controls="accessibility-panel"
      >
        ♿<span className="sr-only">Toggle accessibility options</span>
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.div
            id="accessibility-panel"
            className="accessibility-panel"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <p>Accessibility</p>
            <ul>
              {optionsConfig.map((option) => (
                <li key={option.key}>
                  <label>
                    <input
                      type="checkbox"
                      checked={options[option.key]}
                      onChange={() => onToggleOption(option.key)}
                    />
                    <span>
                      {option.label}
                      <small>{option.description}</small>
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

AccessibilityMenu.propTypes = {
  options: PropTypes.shape({
    largeText: PropTypes.bool.isRequired,
    highContrast: PropTypes.bool.isRequired,
    reduceMotion: PropTypes.bool.isRequired
  }).isRequired,
  onToggleOption: PropTypes.func.isRequired
};
