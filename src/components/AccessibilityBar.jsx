import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const AccessibilityBar = ({ accessibility, setAccessibility }) => {
  const toggleOption = (key) => {
    setAccessibility((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <aside className="accessibility-bar" aria-label="Accessibility preferences">
      <button
        type="button"
        className={`accessibility-btn ${accessibility.largeText ? 'active' : ''}`}
        onClick={() => toggleOption('largeText')}
      >
        <AnimatedIcon name="text" />
        <span>Large Text</span>
      </button>
      <button
        type="button"
        className={`accessibility-btn ${accessibility.highContrast ? 'active' : ''}`}
        onClick={() => toggleOption('highContrast')}
      >
        <AnimatedIcon name="contrast" />
        <span>High Contrast</span>
      </button>
      <button
        type="button"
        className={`accessibility-btn ${accessibility.reduceMotion ? 'active' : ''}`}
        onClick={() => toggleOption('reduceMotion')}
      >
        <AnimatedIcon name="motion" />
        <span>Reduce Motion</span>
      </button>
    </aside>
  );
};

AccessibilityBar.propTypes = {
  accessibility: PropTypes.shape({
    largeText: PropTypes.bool,
    highContrast: PropTypes.bool,
    reduceMotion: PropTypes.bool,
  }).isRequired,
  setAccessibility: PropTypes.func.isRequired,
};

export default AccessibilityBar;
