import AnimatedIcon from './AnimatedIcon.jsx';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <AnimatedIcon name="logo" />
        <div>
          <p className="footer-title">Variable Objects</p>
          <p className="footer-subtitle">Where Art Meets Intelligence</p>
        </div>
      </div>
      <div className="footer-contact">
        <p><strong>Ocean Beach HQ</strong></p>
        <p>4841 Newport Ave, Ocean Beach, CA 92107</p>
        <p>📞 <a href="tel:16196636363">(619) 663-6363</a></p>
        <p>✉️ <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a></p>
      </div>
      <div className="footer-social">
        <p className="footer-subtitle">Stay connected</p>
        <div className="social-links">
          <a href="https://www.linkedin.com" aria-label="LinkedIn" className="icon-link">
            <AnimatedIcon name="linkedin" />
          </a>
          <a href="https://www.instagram.com" aria-label="Instagram" className="icon-link">
            <AnimatedIcon name="instagram" />
          </a>
          <a href="https://www.twitter.com" aria-label="Twitter" className="icon-link">
            <AnimatedIcon name="twitter" />
          </a>
        </div>
        <p className="footer-note">Serving the U.S. West Coast and visionary partners beyond.</p>
      </div>
    </footer>
  );
};

export default Footer;
