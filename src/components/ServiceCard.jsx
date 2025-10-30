import PropTypes from 'prop-types';
import AnimatedIcon from './AnimatedIcon.jsx';

const ServiceCard = ({ title, points, stat }) => {
  return (
    <article className="service-card">
      <div className="service-header">
        <h3>{title}</h3>
        {stat && <span className="service-stat">{stat}</span>}
      </div>
      <ul>
        {points.map((point) => (
          <li key={point}>
            <AnimatedIcon name="arrow" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  stat: PropTypes.string,
};

export default ServiceCard;
