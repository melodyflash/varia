const { useState, useEffect, useMemo, useCallback, useContext } = React;
const {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  useLocation,
  useNavigate,
} = ReactRouterDOM;

const ThemeContext = React.createContext();
const AccessibilityContext = React.createContext();

const usePrefersDark = () => {
  const [prefersDark, setPrefersDark] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    if (!window.matchMedia) return;
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (event) => setPrefersDark(event.matches);
    try {
      media.addEventListener('change', listener);
    } catch (error) {
      if (media.addListener) {
        media.addListener(listener);
      }
    }
    return () => {
      try {
        media.removeEventListener('change', listener);
      } catch (error) {
        if (media.removeListener) {
          media.removeListener(listener);
        }
      }
    };
  }, []);

  return prefersDark;
};

const ThemeProvider = ({ children }) => {
  const prefersDark = usePrefersDark();
  const [theme, setTheme] = useState(() => {
    const stored = window.localStorage.getItem('variable-theme');
    return stored || (prefersDark ? 'dark' : 'dark');
  });

  useEffect(() => {
    window.localStorage.setItem('variable-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    document.body.classList.toggle('theme-light', theme === 'light');
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const AccessibilityProvider = ({ children }) => {
  const [fontScale, setFontScale] = useState(() =>
    window.localStorage.getItem('variable-font-scale') || 'base'
  );
  const [highContrast, setHighContrast] = useState(() =>
    window.localStorage.getItem('variable-high-contrast') === 'true'
  );
  const [reduceMotion, setReduceMotion] = useState(() =>
    window.localStorage.getItem('variable-reduce-motion') === 'true'
  );

  useEffect(() => {
    window.localStorage.setItem('variable-font-scale', fontScale);
    document.documentElement.setAttribute('data-font-scale', fontScale === 'base' ? 'base' : fontScale);
  }, [fontScale]);

  useEffect(() => {
    window.localStorage.setItem('variable-high-contrast', highContrast);
    document.body.classList.toggle('high-contrast', highContrast);
  }, [highContrast]);

  useEffect(() => {
    window.localStorage.setItem('variable-reduce-motion', reduceMotion);
    document.body.classList.toggle('reduced-motion', reduceMotion);
  }, [reduceMotion]);

  const value = useMemo(
    () => ({
      fontScale,
      highContrast,
      reduceMotion,
      setFontScale,
      setHighContrast,
      setReduceMotion,
    }),
    [fontScale, highContrast, reduceMotion]
  );

  return <AccessibilityContext.Provider value={value}>{children}</AccessibilityContext.Provider>;
};

const useTheme = () => useContext(ThemeContext);
const useAccessibility = () => useContext(AccessibilityContext);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
];

const Icon = ({ name }) => {
  const common = { width: 24, height: 24, stroke: 'currentColor', fill: 'none', strokeWidth: 1.6 };
  switch (name) {
    case 'menu':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case 'spark':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3l1.6 4.6L18 9l-4.4 1.4L12 15l-1.6-4.6L6 9l4.4-1.4L12 3z" />
        </svg>
      );
    case 'wave':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12c1.5-2 3-3 4.5-3s3 1 4.5 3 3 3 4.5 3 3-1 4.5-3" />
        </svg>
      );
    case 'analytics':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12l4-4 3 3 5-5" />
          <path d="M5 20V4M12 20V10M19 20V6" />
        </svg>
      );
    case 'beacon':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a7 7 0 017 7c0 6-7 13-7 13S5 15 5 9a7 7 0 017-7z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case 'arrow':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case 'link':
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9.5 14.5l5-5" />
          <path d="M8 16a4 4 0 010-5.66l1.42-1.42" />
          <path d="M16 8a4 4 0 010 5.66l-1.42 1.42" />
        </svg>
      );
    default:
      return null;
  }
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light theme">
      <Icon name="spark" />
      {theme === 'dark' ? 'Dark' : 'Light'} mode
    </button>
  );
};

const AccessibilityDrawer = ({ open, onClose }) => {
  const { fontScale, highContrast, reduceMotion, setFontScale, setHighContrast, setReduceMotion } =
    useAccessibility();

  return (
    <aside className={`accessibility-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Accessibility</h4>
        <button className="icon-button" onClick={onClose} aria-label="Close accessibility options">
          Close
        </button>
      </div>
      <div className="accessibility-controls">
        <button onClick={() => setFontScale('base')} aria-pressed={fontScale === 'base'}>
          Base text
          <span>{fontScale === 'base' ? 'On' : 'Off'}</span>
        </button>
        <button onClick={() => setFontScale('large')} aria-pressed={fontScale === 'large'}>
          Large text
          <span>{fontScale === 'large' ? 'On' : 'Off'}</span>
        </button>
        <button onClick={() => setFontScale('xlarge')} aria-pressed={fontScale === 'xlarge'}>
          Extra large text
          <span>{fontScale === 'xlarge' ? 'On' : 'Off'}</span>
        </button>
        <button onClick={() => setHighContrast((prev) => !prev)} aria-pressed={highContrast}>
          High contrast
          <span>{highContrast ? 'On' : 'Off'}</span>
        </button>
        <button onClick={() => setReduceMotion((prev) => !prev)} aria-pressed={reduceMotion}>
          Reduce motion
          <span>{reduceMotion ? 'On' : 'Off'}</span>
        </button>
      </div>
    </aside>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <div className="float-aurora" aria-hidden="true"></div>
      <div className="float-aurora" aria-hidden="true"></div>
      <header className="site-header">
        <div className="brand" onClick={() => navigate('/')}
          role="link" tabIndex={0} onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              navigate('/');
            }
          }}
        >
          <div className="logo-orb" aria-hidden="true"></div>
          <span>Variable Objects</span>
        </div>
        <nav className="nav-links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="action-bar">
          <ThemeToggle />
          <button
            className="accessibility-toggle"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-expanded={drawerOpen}
          >
            <Icon name="wave" />
            Access
          </button>
        </div>
        <AccessibilityDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      </header>
      <main id="main" className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

const metrics = [
  {
    value: '48% engagement lift',
    label: 'Interactive artful IoT displays',
    description:
      'Intel\'s Smart Retail case series shows immersive IoT signage can raise shopper engagement by 48% when digital art responds to presence.',
  },
  {
    value: '72% retention rate',
    label: 'Repeat visit momentum',
    description:
      'Deloitte reports hospitality brands using connected loyalty artifacts see up to 72% repeat customer retention thanks to frictionless re-engagement.',
  },
  {
    value: '41% efficiency gain',
    label: 'Operational intelligence',
    description:
      'McKinsey quantified that location-aware sensors and automated analytics cut asset downtime 41%, unlocking faster ROI decisions.',
  },
];

const heroHighlights = [
  {
    title: 'Curate scans that delight',
    description:
      'QR, NFC, and projection-mapped artifacts let customers surface menus, stories, Wi-Fi, or payments from sculptural devices that fit your vibe.',
  },
  {
    title: 'Responsive atmospheres',
    description:
      'Lights, signage, and kinetic art respond to queue length and customer sentiment to entertain, spark curiosity, and pull visitors back.',
  },
  {
    title: 'Insight-rich automation',
    description:
      'Sensors deliver realtime alerts, heatmaps, and loss prevention analytics so teams focus energy on the sparks that matter most.',
  },
];

const studySnippets = [
  {
    heading: 'Scannable art boosts service speed',
    copy:
      'A 2023 Square dining index showed tap-to-order surfaces can turn tables 15% faster while keeping aesthetic cohesion—perfect for hospitality, retail, and galleries.',
  },
  {
    heading: 'Ambient media elevates loyalty',
    copy:
      'According to Nielsen\'s experiential marketing survey, responsive displays increased dwell time 24% and return visits by 18% when paired with personalized content loops.',
  },
  {
    heading: 'Analytics sharpen decisions',
    copy:
      'Microsoft\'s IoT Signals report cites 79% of adopters achieving actionable insights that directly reduce waste, shrink loss, and inform staffing models.',
  },
];

const serviceDetails = [
  {
    title: 'Scannable Artifacts & Smart Objects',
    description:
      'Immersive sculptures, NFC totems, and projection canvases that serve menus, catalogs, FAQs, wifi, and payments while doubling as conversation pieces.',
    reasons: [
      'Square found digital ordering drives 20% higher spend per guest compared to static menus.',
      'Gartner notes 95% of product designs will include IoT by 2027—customers expect connected touchpoints now.',
    ],
  },
  {
    title: 'Responsive Signage, Lighting & Decor',
    description:
      'Animated signage and lighting that shift palettes by audience mood, queue length, or loyalty profiles to inspire repeat visits.',
    reasons: [
      'Nielsen reports responsive experiential media elevates dwell time 24% and brand recall 30%.',
      'Forrester links emotionally resonant retail design to 2x repeat visit likelihood year-over-year.',
    ],
  },
  {
    title: 'Automated Sensors & Alerts',
    description:
      'Discreet sensors watching cold storage, inventory, and sentiment with alerts before issues spiral.',
    reasons: [
      'McKinsey tracked 35% downtime reduction when predictive IoT maintenance is adopted.',
      'Harvard Business Review shows IoT loss prevention slashes shrink by 30% across omnichannel shops.',
    ],
  },
  {
    title: 'Analytics & Creative Intelligence',
    description:
      'Dashboards mixing hard numbers with story-driven visuals to surface underperforming zones and highlight opportunities.',
    reasons: [
      'PwC found data-led retailers are 5x more likely to make faster decisions with confidence.',
      'IDC projects IoT data services will top $483B by 2027 as leaders demand actionable intelligence.',
    ],
  },
];

const caseStudies = [
  {
    name: 'Starbucks BrewerGuard',
    summary:
      'Starbucks instrumented espresso machines with IoT sensors to predict maintenance, saving millions in downtime and ensuring consistent quality across stores.',
    relevance:
      'Our sensor suites apply the same vigilance to local cafes, surf shops, and experiential venues needing to protect margin and mood.',
    highlights: [
      '15% downtime reduction reported in Starbucks\' 2022 equipment reliability briefing.',
      'Predictive alerts kept product waste below 3% while safeguarding guest experience.',
    ],
  },
  {
    name: 'Disney MagicBand Immersion',
    summary:
      'Disney Parks deployed wearable IoT bands that unlock experiences, payments, and personalization, leading to higher per-guest spend and satisfaction.',
    relevance:
      'We craft scannable art objects delivering similar magic for boutique hotels, craft breweries, and museums wanting frictionless delight.',
    highlights: [
      'Disney credited MagicBand for double-digit increases in per-guest transactions post-launch.',
      'Queue entertainment and responsive signage cut perceived wait times dramatically.',
    ],
  },
  {
    name: 'Amazon Fresh & Go Stores',
    summary:
      'Amazon\'s checkout-free concept blends computer vision and sensors to streamline shopping, emphasizing analytics-driven layout optimization.',
    relevance:
      'Variable Objects packages these insights at human scale, pairing artful fixtures with data loops to reduce friction without losing soul.',
    highlights: [
      'Internal case study highlights 20% improvement in restock cadence via live inventory feeds.',
      'Store pilots logged 30% increase in repeat visits within six months of launch.',
    ],
  },
];

const Footer = () => (
  <footer>
    <div className="footer-top">
      <span className="badge">Ocean Beach • San Diego • West Coast roots</span>
      <strong>Variable Objects — Art meets intelligence for connected communities.</strong>
    </div>
    <div className="footer-links">
      {navLinks.map((link) => (
        <NavLink key={link.path} to={link.path}>
          {link.label}
        </NavLink>
      ))}
    </div>
    <div className="social-icons">
      <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer">
        <Icon name="link" />
      </a>
      <a href="https://www.linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
        <Icon name="link" />
      </a>
      <a href="https://www.twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">
        <Icon name="link" />
      </a>
    </div>
    <span className="muted">© {new Date().getFullYear()} Variable Objects. Crafted with integrity, accessibility, and West Coast curiosity.</span>
  </footer>
);

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1>
            Where <span className="gradient-text">art meets intelligence</span> for IoT-powered ROI
          </h1>
          <p>
            Variable Objects builds bespoke, art-forward IoT ecosystems from Ocean Beach, CA. We blend
            responsive design, ethical data, and community-first storytelling so your smart devices feel
            like part of the neighborhood while driving measurable growth.
          </p>
          <div className="hero-actions">
            <button className="cta-button" onClick={() => navigate('/contact')}>
              <span>Book a consult</span>
            </button>
            <button className="icon-button" onClick={() => navigate('/services')}>
              Explore services
              <Icon name="arrow" />
            </button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <article className="metric-card" key={metric.value}>
                <span>{metric.label}</span>
                <h3>{metric.value}</h3>
                <p>{metric.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Designed to inform, delight, and endure</h2>
          <p className="section-subtitle">
            Every installation is a collaboration. We prototype with artisans, engineers, and your team to
            fold business intelligence into visual poetry.
          </p>
        </header>
        <div className="card-grid">
          {heroHighlights.map((item) => (
            <article className="glass-card" key={item.title}>
              <div className="icon-ring">
                <Icon name="spark" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Why forward-looking brands choose IoT artistry</h2>
          <p className="section-subtitle">
            Studies and pilots across retail, hospitality, and entertainment confirm that connected
            experiences boost ROI, reduce operational drag, and keep communities coming back for more.
          </p>
        </header>
        <div className="card-grid">
          {studySnippets.map((snippet) => (
            <article className="glass-card" key={snippet.heading}>
              <h3>{snippet.heading}</h3>
              <p>{snippet.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <header className="section-header">
          <h2 className="section-title">Lifecycle partnership</h2>
          <p className="section-subtitle">
            We stay with you from discovery to operations, translating device signals into decisions and
            stories your teams love to tell.
          </p>
        </header>
        <div className="timeline">
          <article className="timeline-item">
            <h3>Imagine</h3>
            <p>
              Co-design residencies with local artists, architects, and your staff to storyboard the vibe and
              impact across every smart object.
            </p>
          </article>
          <article className="timeline-item">
            <h3>Engineer</h3>
            <p>
              Build beautiful enclosures, safe infrastructure, and resilient software using privacy-first
              data flows.
            </p>
          </article>
          <article className="timeline-item">
            <h3>Optimize</h3>
            <p>
              Activate analytics, tune automations, and mentor teams so insights become habitual, not
              burdensome.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <ContactCTA />
      </section>
    </div>
  );
};

const ServicesPage = () => (
  <div>
    <header className="section-header">
      <h1 className="section-title">Services engineered with artistic flair</h1>
      <p className="section-subtitle">
        We orchestrate IoT ecosystems that feel like installations, not infrastructure. Each engagement is
        grounded in ethics, inclusive design, and business intelligence tuned for your neighborhood.
      </p>
    </header>
    <div className="card-grid">
      {serviceDetails.map((service) => (
        <article className="glass-card" key={service.title}>
          <div className="icon-ring">
            <Icon name="analytics" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.reasons.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
    <section className="section">
      <ContactCTA />
    </section>
  </div>
);

const CaseStudiesPage = () => (
  <div>
    <header className="section-header">
      <h1 className="section-title">Case studies that inspire west coast ingenuity</h1>
      <p className="section-subtitle">
        We channel global IoT success stories through a local, human lens—crafting solutions that fit Ocean
        Beach culture while scaling worldwide.
      </p>
    </header>
    <div className="card-grid">
      {caseStudies.map((study) => (
        <article className="case-card" key={study.name}>
          <strong>{study.name}</strong>
          <p>{study.summary}</p>
          <p className="highlight">How it informs Variable Objects:</p>
          <p>{study.relevance}</p>
          <ul>
            {study.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
    <section className="section">
      <ContactCTA />
    </section>
  </div>
);

const AboutPage = () => (
  <div>
    <header className="section-header">
      <h1 className="section-title">About Variable Objects</h1>
      <p className="section-subtitle">
        Born in Ocean Beach, San Diego, we believe connection is both circuitry and community. Our crew of
        technologists, artists, and strategists builds IoT experiences that honor local culture, protect
        privacy, and deliver measurable ROI.
      </p>
    </header>
    <div className="card-grid">
      <article className="glass-card">
        <div className="icon-ring">
          <Icon name="spark" />
        </div>
        <h3>Ethical, community-minded values</h3>
        <p>
          We design with consent and respect. Data is transparent, opt-in, and used to elevate staff and
          customer wellbeing. We invest in local artists and fabricators for every build.
        </p>
      </article>
      <article className="glass-card">
        <div className="icon-ring">
          <Icon name="wave" />
        </div>
        <h3>Art meets tech</h3>
        <p>
          Sculptural enclosures, projection art, and kinetic lighting blend with resilient software stacks.
          We prototype rapidly so your experience feels curated, not commoditized.
        </p>
      </article>
      <article className="glass-card">
        <div className="icon-ring">
          <Icon name="analytics" />
        </div>
        <h3>Problem solving with sass</h3>
        <p>
          We love a challenge. Whether it\'s reinventing check-ins or designing queue entertainment, expect a
          playful edge backed by serious engineering.
        </p>
      </article>
    </div>
    <section className="section contact-panel">
      <div className="contact-card">
        <h2>Stay connected</h2>
        <p>
          1950 Abbott St, Ocean Beach, San Diego, CA 92107
          <br />
          hello@variableobjects.com
        </p>
        <ul>
          <li>
            <Icon name="link" /> 619 663 6363
          </li>
          <li>
            <Icon name="link" /> awesome3dpf@proton.me
          </li>
          <li>
            <Icon name="link" /> Serving the US West Coast and beyond
          </li>
        </ul>
      </div>
      <ContactForm />
    </section>
  </div>
);

const ContactCTA = () => {
  const navigate = useNavigate();
  return (
    <div className="contact-card">
      <h2>Let\'s create beautiful performance</h2>
      <p>
        Ready to orchestrate IoT art that pays for itself? Share your story and we\'ll sketch a concept deck
        tailored to your goals within 48 hours.
      </p>
      <button className="cta-button" onClick={() => navigate('/contact')}>
        <span>Start the conversation</span>
      </button>
    </div>
  );
};

const ContactForm = () => {
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const subject = encodeURIComponent('Variable Objects inquiry');
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nCompany: ${formData.get('company')}\nEmail: ${formData.get('email')}\nPhone: ${formData.get('phone')}\nProject vision: ${formData.get('message')}`
    );
    window.location.href = `mailto:awesome3dpf@proton.me?subject=${subject}&body=${body}`;
    setStatus('Thanks! Your email client should now open so you can send the message.');
    event.target.reset();
  };

  return (
    <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
      <h2>Contact Variable Objects</h2>
      <p className="muted">
        Let us know where artful intelligence can lift your operations. We respond in one business day.
      </p>
      <div className="form-grid">
        <label>
          Name
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label>
          Company / Venue
          <input type="text" name="company" autoComplete="organization" />
        </label>
        <label>
          Email
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" defaultValue="619 663 6363" aria-describedby="phone-note" />
        </label>
        <span id="phone-note" className="muted">
          Prefer text? Mention it and we\'ll message you at 619 663 6363.
        </span>
        <label>
          Project vision
          <textarea name="message" rows="5" placeholder="Tell us about the experience you imagine." required></textarea>
        </label>
      </div>
      <button className="cta-button" type="submit">
        <span>Send message</span>
      </button>
      {status && <p role="status">{status}</p>}
    </form>
  );
};

const ContactPage = () => (
  <div>
    <header className="section-header">
      <h1 className="section-title">Let\'s craft your next connected experience</h1>
      <p className="section-subtitle">
        Share your goals and we\'ll assemble a concept mood board aligned to your brand, customer journey,
        and operational metrics.
      </p>
    </header>
    <section className="contact-panel">
      <div className="contact-card">
        <h2>Connect with us</h2>
        <p>
          Phone: <a href="tel:16196636363">619 663 6363</a>
          <br />Email: <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a>
          <br />Ocean Beach, San Diego, CA
        </p>
        <p>
          We partner across the US West Coast and beyond, centering ethical data practices and community
          stewardship in every engagement.
        </p>
      </div>
      <ContactForm />
    </section>
  </div>
);

const App = () => (
  <ThemeProvider>
    <AccessibilityProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AccessibilityProvider>
  </ThemeProvider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
