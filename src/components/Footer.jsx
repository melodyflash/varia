import { motion } from 'framer-motion';

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/variableobjects', icon: '📸' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/variable-objects', icon: '💼' },
  { label: 'Twitter', href: 'https://twitter.com/variableobjs', icon: '🐦' }
];

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Variable Objects</h3>
        <p>Ocean Beach, San Diego · Serving the West Coast and visionary brands everywhere.</p>
        <p>
          Call us at <a href="tel:16196636363">619&nbsp;663&nbsp;6363</a> or email{' '}
          <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a>
        </p>
      </div>
      <div className="footer-socials" aria-label="Social media">
        {socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.1 }}
            whileFocus={{ scale: 1.1 }}
            className="icon-button"
          >
            <span aria-hidden="true">{social.icon}</span>
            <span className="sr-only">{social.label}</span>
          </motion.a>
        ))}
      </div>
      <small>© {new Date().getFullYear()} Variable Objects. Integrity-led IoT artistry.</small>
    </footer>
  );
}
