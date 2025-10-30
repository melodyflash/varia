import React from "https://esm.sh/react@18";

const { useState, useEffect } = React;

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "cases", label: "Case Studies" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

const metrics = [
  {
    label: "Engagement Uplift",
    value: "48%",
    detail:
      "Capgemini reported immersive IoT experiences boost in-store engagement by up to 48% when artistic elements invite interaction."
  },
  {
    label: "Retention Rate",
    value: "72%",
    detail:
      "Deloitte found experience-led loyalty programs drive a 72% repeat-visit likelihood once connected devices reward returning guests."
  },
  {
    label: "Efficiency Gain",
    value: "41%",
    detail:
      "McKinsey analytics show adaptive lighting and automation deliver an average 41% energy efficiency improvement across smart venues."
  }
];

const serviceDetails = [
  {
    id: "artifacts",
    title: "Customer-Activated Artifacts",
    blurb:
      "Design-forward QR, NFC, and AR touchpoints that surface menus, catalogs, loyalty perks, and payments the second curiosity strikes.",
    insight:
      "Square's 2023 Future of Retail notes 68% of shoppers prefer self-guided discovery—smart artifacts capture that moment and convert it.",
    icon: "Artifacts"
  },
  {
    id: "responsive",
    title: "Responsive Signage & Atmosphere",
    blurb:
      "Animated signage, lights, and sculptural displays that react to presence, keep queue lines playful, and encourage repeat visits.",
    insight:
      "Research from the Journal of Consumer Marketing links responsive environments to a 30% lift in revisit intent for experiential stores.",
    icon: "Signage"
  },
  {
    id: "sensors",
    title: "Sensor Alerts & Protection",
    blurb:
      "Environmental, occupancy, and asset sensors that notify teams before losses occur, protecting margins and staff time.",
    insight:
      "Gartner reports predictive IoT can shrink unplanned downtime by 40%, uncovering underperforming processes in real time.",
    icon: "Sensors"
  },
  {
    id: "analytics",
    title: "Insightful Analytics",
    blurb:
      "Visualize device telemetry, foot traffic, and sentiment pulses so leaders can act with confidence and artistry.",
    insight:
      "Forrester highlights that data-led decisions increase ROI by 58% when insights are embedded into daily operations.",
    icon: "Analytics"
  }
];

const caseStudies = [
  {
    title: "Disney's MagicBand",
    location: "Orlando, FL",
    summary:
      "Disney combined wearable IoT with theatrical lighting to trim wait times and saw guest spending rise roughly 8%, proving artful tech builds loyalty.",
    takeaway:
      "We translate that same storytelling energy into boutique retail and hospitality moments across the West Coast."
  },
  {
    title: "Starbucks Mobile Order & Pay",
    location: "Global Flagships",
    summary:
      "Starbucks connected sensors with digital ordering to streamline handoffs, cutting queue friction and raising mobile transactions above 25% of sales.",
    takeaway:
      "Variable Objects deploys similar scannable artifacts so independent cafes serve locals with enterprise-grade polish."
  },
  {
    title: "Hilton Connected Room",
    location: "United States",
    summary:
      "Hilton empowered guests to personalize lighting, climate, and media; pilot sites captured a 20% boost in satisfaction scores and repeat bookings.",
    takeaway:
      "Our responsive signage and adaptive ambience deliver that comfort-first precision to coastal venues."
  },
  {
    title: "Walmart IoT Cold Chain",
    location: "United States",
    summary:
      "Networked sensors reduced spoilage by monitoring refrigeration 24/7, driving multimillion-dollar savings annually.",
    takeaway:
      "We apply the same vigilance to safeguard artisan goods, galleries, and community storefronts in San Diego and beyond."
  }
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com", icon: "Instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "LinkedIn" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" }
];

const icons = {
  Artifacts: (props) => (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="artifactGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-soft)" />
        </linearGradient>
      </defs>
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="12"
        ry="12"
        fill="url(#artifactGradient)"
        opacity="0.6"
      />
      <path
        d="M20 24h24M20 32h24M20 40h16"
        stroke="var(--accent-strong)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="44" cy="40" r="4" fill="var(--accent-strong)" />
    </svg>
  ),
  Signage: (props) => (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <defs>
        <radialGradient id="signageGradient" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="var(--accent-strong)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="32" cy="32" r="20" fill="url(#signageGradient)" />
      <path
        d="M16 24h32l-6 10 6 10H16"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinejoin="round"
        fill="none"
      />
      <circle cx="26" cy="32" r="3" fill="var(--accent)" />
      <circle cx="38" cy="32" r="3" fill="var(--accent)" />
    </svg>
  ),
  Sensors: (props) => (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <circle cx="32" cy="32" r="10" fill="var(--accent)" opacity="0.9" />
      <circle cx="32" cy="32" r="18" stroke="var(--accent-soft)" strokeWidth="4" fill="none" />
      <circle cx="32" cy="32" r="26" stroke="var(--accent)" strokeWidth="2" strokeDasharray="6 6" fill="none" />
      <path
        d="M32 18v-6M46 32h6M32 46v6M18 32h-6"
        stroke="var(--accent-strong)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  ),
  Analytics: (props) => (
    <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
      <polyline
        points="12,44 24,32 34,38 48,20"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="32" r="4" fill="var(--accent-strong)" />
      <circle cx="34" cy="38" r="4" fill="var(--accent-strong)" />
      <circle cx="48" cy="20" r="5" fill="var(--accent)" opacity="0.8" />
      <rect x="10" y="16" width="44" height="32" rx="8" ry="8" stroke="var(--accent-soft)" strokeWidth="2" fill="none" />
    </svg>
  ),
  Instagram: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="6" ry="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      <circle cx="17" cy="7" r="1.5" fill="currentColor" />
    </svg>
  ),
  LinkedIn: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="7" y="10" width="2.8" height="7" fill="currentColor" />
      <circle cx="8.4" cy="7.3" r="1.4" fill="currentColor" />
      <path d="M12.5 10h2.4a3 3 0 0 1 3 3v4h-2.8v-3.5c0-.7-.6-1.3-1.3-1.3-.4 0-.8.2-1.3.6V17H9.7v-7h2.8v1z" fill="currentColor" />
    </svg>
  ),
  Twitter: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M21 6.5a5.4 5.4 0 0 1-1.6.5 2.7 2.7 0 0 0 1.2-1.5 5.3 5.3 0 0 1-1.8.7A2.7 2.7 0 0 0 12 8.8a7.6 7.6 0 0 1-5.5-2.8 2.7 2.7 0 0 0 .8 3.6 2.6 2.6 0 0 1-1.2-.3v.1a2.7 2.7 0 0 0 2.2 2.7 2.7 2.7 0 0 1-1.2.1 2.7 2.7 0 0 0 2.5 1.8A5.4 5.4 0 0 1 3 16.6 7.6 7.6 0 0 0 7.1 18c5.9 0 9.1-4.9 9.1-9.1v-.4A6.4 6.4 0 0 0 21 6.5z"
        fill="currentColor"
      />
    </svg>
  )
};

function App() {
  const [theme, setTheme] = useState("dark");
  const [activePage, setActivePage] = useState("home");
  const [formStatus, setFormStatus] = useState("");
  const [prefs, setPrefs] = useState({
    largeText: false,
    highContrast: false,
    reduceMotion: false
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    Object.entries(prefs).forEach(([key, value]) => {
      document.documentElement.classList.toggle(`pref-${key}`, value);
    });
  }, [prefs]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handlePrefChange = (name) => {
    setPrefs((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleNavigate = (id) => {
    setActivePage(id);
    window.scrollTo({ top: 0, behavior: prefs.reduceMotion ? "auto" : "smooth" });
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const company = formData.get("company");
    const message = formData.get("message");
    const subject = encodeURIComponent(`Variable Objects Inquiry from ${name || "Prospective Partner"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`
    );
    window.location.href = `mailto:awesome3dpf@proton.me?subject=${subject}&body=${body}`;
    setFormStatus("Thanks for reaching out! We will connect with you shortly.");
    event.target.reset();
  };

  let pageContent;
  switch (activePage) {
    case "services":
      pageContent = <ServicesPage onContact={() => handleNavigate("contact")} />;
      break;
    case "cases":
      pageContent = <CaseStudiesPage onContact={() => handleNavigate("contact")} />;
      break;
    case "about":
      pageContent = <AboutPage />;
      break;
    case "contact":
      pageContent = <ContactSection onSubmit={handleContactSubmit} formStatus={formStatus} />;
      break;
    case "home":
    default:
      pageContent = (
        <>
          <HomePage onNavigate={handleNavigate} onContact={() => handleNavigate("contact")} />
          <ServicesPreview onNavigate={() => handleNavigate("services")} />
          <CaseStudiesPreview onNavigate={() => handleNavigate("cases")} />
          <ContactSection onSubmit={handleContactSubmit} formStatus={formStatus} />
        </>
      );
  }

  return (
    <div className="app-shell">
      <DynamicBackground reduceMotion={prefs.reduceMotion} />
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
        navItems={navItems}
        activePage={activePage}
        onNavigate={handleNavigate}
        prefs={prefs}
        onPrefChange={handlePrefChange}
      />
      <main>{pageContent}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

const Header = ({ theme, onToggleTheme, navItems, activePage, onNavigate, prefs, onPrefChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accessOpen, setAccessOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 960) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleAccess = () => setAccessOpen((prev) => !prev);

  return (
    <header className={`app-header ${menuOpen ? "menu-open" : ""}`}>
      <div
        className="brand"
        onClick={() => onNavigate("home")}
        role="button"
        tabIndex={0}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onNavigate("home");
          }
        }}
      >
        <div className="brand-mark" aria-hidden="true">
          <span className="brand-orb" />
        </div>
        <div className="brand-text">
          <span className="brand-name">Variable Objects</span>
          <span className="brand-tag">Ocean Beach · San Diego</span>
        </div>
      </div>
      <nav className={`main-nav ${menuOpen ? "visible" : ""}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-link ${activePage === item.id ? "active" : ""}`}
            onClick={() => {
              onNavigate(item.id);
              setMenuOpen(false);
            }}
          >
            {item.label}
          </button>
        ))}
      </nav>
      <div className="header-controls">
        <button
          className="icon-button accessibility-toggle"
          aria-expanded={accessOpen}
          onClick={toggleAccess}
        >
          <span className="sr-only">Accessibility preferences</span>
          <span className="icon-contrast" aria-hidden="true" />
        </button>
        <button
          className="icon-button theme-toggle"
          onClick={onToggleTheme}
          aria-pressed={theme === "dark"}
        >
          <span className="sr-only">Toggle color theme</span>
          <span className="icon-theme" aria-hidden="true" />
        </button>
        <button className="icon-button menu-toggle" onClick={toggleMenu} aria-expanded={menuOpen}>
          <span className="sr-only">Toggle navigation menu</span>
          <span className="icon-menu" aria-hidden="true" />
        </button>
      </div>
      {accessOpen && (
        <div className="accessibility-panel">
          <h2>Accessibility</h2>
          <PreferenceToggle
            label="Large text"
            description="Boosts type size for easier scanning."
            active={prefs.largeText}
            onChange={() => onPrefChange("largeText")}
          />
          <PreferenceToggle
            label="High contrast"
            description="Sharpens colors for clarity."
            active={prefs.highContrast}
            onChange={() => onPrefChange("highContrast")}
          />
          <PreferenceToggle
            label="Reduce motion"
            description="Minimizes animations for sensitive users."
            active={prefs.reduceMotion}
            onChange={() => onPrefChange("reduceMotion")}
          />
        </div>
      )}
    </header>
  );
};

const PreferenceToggle = ({ label, description, active, onChange }) => (
  <button
    className={`preference-toggle ${active ? "active" : ""}`}
    role="switch"
    aria-checked={active}
    onClick={onChange}
  >
    <span className="toggle-label">{label}</span>
    <span className="toggle-description">{description}</span>
    <span className="toggle-indicator" aria-hidden="true" />
  </button>
);

const DynamicBackground = ({ reduceMotion }) => (
  <div className={`dynamic-background ${reduceMotion ? "paused" : ""}`} aria-hidden="true">
    <div className="bg-orb orb-one" />
    <div className="bg-orb orb-two" />
    <div className="bg-orb orb-three" />
  </div>
);

const HomePage = ({ onNavigate, onContact }) => (
  <section id="home" className="page-section hero">
    <div className="hero-content">
      <p className="eyebrow">IoT artistry engineered in Ocean Beach, CA</p>
      <h1>
        Where Art Meets <span className="gradient-text">Intelligence</span>
      </h1>
      <p className="hero-subtext">
        Variable Objects designs responsive environments that perform beautifully. We pair sensor intelligence with sculptural interactions so
        teams can see, feel, and celebrate the ROI of data-informed decisions.
      </p>
      <div className="hero-actions">
        <button className="cta" onClick={onContact}>
          Start a Project
        </button>
        <button className="ghost" onClick={() => onNavigate("services")}>Explore Services</button>
      </div>
      <div className="metric-grid">
        {metrics.map((metric) => (
          <article key={metric.label} className="metric-card" aria-label={metric.label}>
            <h3>{metric.value}</h3>
            <p className="metric-label">{metric.label}</p>
            <p className="metric-detail">{metric.detail}</p>
          </article>
        ))}
      </div>
    </div>
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-orb main" />
      <div className="hero-orb accent" />
      <div className="hero-wireframe" />
    </div>
  </section>
);

const ServicesPreview = ({ onNavigate }) => (
  <section className="page-section services-preview" id="services">
    <header>
      <p className="eyebrow">Services Snapshot</p>
      <h2>Experience-first IoT that sparks repeat visits</h2>
      <p>
        From scannable menus that delight to responsive lighting that keeps queues smiling, we infuse every solution with artistry and analytics so
        teams can act fast.
      </p>
    </header>
    <div className="service-grid">
      {serviceDetails.slice(0, 3).map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
    <button className="cta" onClick={onNavigate}>
      See all services
    </button>
  </section>
);

const ServicesPage = ({ onContact }) => (
  <section className="page-section" id="services" aria-labelledby="services-title">
    <header className="section-header">
      <p className="eyebrow">Solutions Crafted for ROI</p>
      <h2 id="services-title">Art-led, sensor-smart services</h2>
      <p>
        We choreograph devices, data, and design to reveal opportunities faster. Recent studies from Accenture show IoT leaders are 1.6× more likely
        to exceed ROI targets—our team ensures small and midsize businesses share that edge.
      </p>
    </header>
    <div className="service-grid full">
      {serviceDetails.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
    <aside className="insight-callout">
      <h3>Why now?</h3>
      <ul>
        <li>
          Verizon's 2024 State of IoT report notes 55% of businesses adopting smart devices cut manual tasks for staff, freeing teams to focus on
          hospitality.
        </li>
        <li>
          Experiential retail studies show artistic installations can raise dwell time 20 minutes per visit, correlating with double-digit revenue
          growth.
        </li>
        <li>
          Bain & Company found cross-team visibility from real-time dashboards boosts strategic decision speed by 36%—perfect for agile
          entrepreneurs.
        </li>
      </ul>
    </aside>
    <div className="centered">
      <button className="cta" onClick={onContact}>
        Schedule a discovery call
      </button>
    </div>
  </section>
);

const ServiceCard = ({ service }) => {
  const Icon = icons[service.icon] || icons.Artifacts;
  return (
    <article className="service-card" tabIndex={0}>
      <Icon className="service-icon" />
      <h3>{service.title}</h3>
      <p>{service.blurb}</p>
      <p className="service-insight">{service.insight}</p>
    </article>
  );
};

const CaseStudiesPreview = ({ onNavigate }) => (
  <section className="page-section cases-preview" id="case-studies">
    <header>
      <p className="eyebrow">Proven Inspiration</p>
      <h2>Case studies we channel</h2>
      <p>
        We reference the boldest public IoT stories to design community-minded experiences for local businesses.
      </p>
    </header>
    <div className="case-grid">
      {caseStudies.slice(0, 3).map((study) => (
        <CaseCard key={study.title} study={study} />
      ))}
    </div>
    <button className="ghost" onClick={onNavigate}>
      Explore detailed case studies
    </button>
  </section>
);

const CaseStudiesPage = ({ onContact }) => (
  <section className="page-section" id="cases" aria-labelledby="case-studies-title">
    <header className="section-header">
      <p className="eyebrow">Community-Proven Impact</p>
      <h2 id="case-studies-title">Case studies that inspire our craft</h2>
      <p>
        We remix globally celebrated IoT wins into bespoke art-tech narratives for West Coast innovators, grounding every deployment in ethics,
        transparency, and measurable ROI.
      </p>
    </header>
    <div className="case-grid full">
      {caseStudies.map((study) => (
        <CaseCard key={study.title} study={study} />
      ))}
    </div>
    <div className="case-callout">
      <h3>Data-backed delight</h3>
      <p>
        Harvard Business Review reports emotionally connected customers are 52% more valuable. By pairing IoT analytics with aesthetics, we turn raw
        numbers into felt experiences that spark loyalty and referrals.
      </p>
      <button className="cta" onClick={onContact}>
        Let's craft your story
      </button>
    </div>
  </section>
);

const CaseCard = ({ study }) => (
  <article className="case-card" tabIndex={0}>
    <h3>{study.title}</h3>
    <p className="case-location">{study.location}</p>
    <p>{study.summary}</p>
    <p className="case-takeaway">{study.takeaway}</p>
  </article>
);

const AboutPage = () => (
  <section className="page-section" id="about" aria-labelledby="about-title">
    <header className="section-header">
      <p className="eyebrow">About Variable Objects</p>
      <h2 id="about-title">Ethical, community-minded technologists</h2>
      <p>
        Based in Ocean Beach, San Diego, we blend coastal creativity with engineering rigor. We believe connection should extend beyond devices—every
        installation is a bridge between teams, guests, and neighborhoods.
      </p>
    </header>
    <div className="about-grid">
      <article>
        <h3>Art meets systems thinking</h3>
        <p>
          Our studio was founded by designers and technologists who moonlight as musicians, muralists, and data scientists. We choreograph sensors,
          projection, lighting, and sound so every interaction feels intentional and alive.
        </p>
        <p>
          From dive bars on Newport Ave to resort lounges up the coast, we tailor experiences that celebrate local stories while surfacing the metrics
          leaders need to grow responsibly.
        </p>
      </article>
      <article>
        <h3>Integrity, always</h3>
        <p>
          We audit every device for privacy, ensure ADA-forward interfaces, and train teams so technology feels like a trusted collaborator. Our
          commitments include:
        </p>
        <ul className="values-list">
          <li>Transparent data practices and opt-in touchpoints.</li>
          <li>Local partnerships that reinvest in the Ocean Beach creative economy.</li>
          <li>Inclusive design with accessibility baked into every artifact.</li>
        </ul>
        <p>
          Connection is culture—we nurture both the digital networks and the human relationships that keep communities thriving.
        </p>
      </article>
    </div>
  </section>
);

const ContactSection = ({ onSubmit, formStatus }) => (
  <section className="page-section contact" id="contact" aria-labelledby="contact-title">
    <header className="section-header">
      <p className="eyebrow">Let's collaborate</p>
      <h2 id="contact-title">Bring intelligence to your environment</h2>
      <p>
        Share your vision and we'll respond within one business day. We'll co-create a roadmap that respects your team, your guests, and your brand's
        artistic voice.
      </p>
    </header>
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="form-row">
        <label htmlFor="name">Full name</label>
        <input id="name" name="name" type="text" required placeholder="Avery Rivera" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@business.com" />
      </div>
      <div className="form-row">
        <label htmlFor="company">Company or venue</label>
        <input id="company" name="company" type="text" placeholder="Oceanfront Collective" />
      </div>
      <div className="form-row">
        <label htmlFor="message">Tell us about your goals</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="We'd love responsive queue art that doubles as a loyalty enrollment experience."
          required
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="cta">
          Email Variable Objects
        </button>
      </div>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </form>
    <div className="contact-details">
      <h3>Prefer to call or connect socially?</h3>
      <p>
        Phone: <a href="tel:16196636363">619&nbsp;663&nbsp;6363</a>
      </p>
      <p>
        Email: <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a>
      </p>
      <div className="social-links">
        {socialLinks.map((link) => {
          const Icon = icons[link.icon];
          return (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="social-link">
              <Icon className="social-icon" />
              <span>{link.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }) => (
  <footer className="site-footer">
    <div>
      <p className="footer-brand">Variable Objects</p>
      <p>Ocean Beach · San Diego, CA</p>
      <p>Designing artful IoT for the West Coast and beyond.</p>
    </div>
    <div className="footer-nav">
      {navItems.map((item) => (
        <button key={item.id} onClick={() => onNavigate(item.id)}>
          {item.label}
        </button>
      ))}
    </div>
    <div className="footer-meta">
      <p>© {new Date().getFullYear()} Variable Objects. Crafted with integrity.</p>
    </div>
  </footer>
);

export default App;
