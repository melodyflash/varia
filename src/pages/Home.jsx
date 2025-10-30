import { Link } from 'react-router-dom';
import MetricCard from '../components/MetricCard.jsx';
import ContactCTA from '../components/ContactCTA.jsx';

const metrics = [
  {
    value: '48% uplift',
    label: 'Engagement',
    description: 'Gartner reports immersive IoT experiences increase dwell time and conversions by nearly half.',
  },
  {
    value: '72% retention',
    label: 'Repeat visits',
    description: 'Bain found loyalty climbs when responsive environments celebrate returning guests with personalized moments.',
  },
  {
    value: '41% leaner',
    label: 'Operational spend',
    description: 'McKinsey notes smart automation trims energy and staffing costs while unlocking new creative bandwidth.',
  },
];

const Home = () => {
  return (
    <div className="page home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Ocean Beach-crafted, coast-to-coast impact</p>
          <h1>
            Art-forward IoT ecosystems that <span>perform beautifully</span>
          </h1>
          <p className="hero-description">
            Variable Objects designs responsive spaces where sensors, signage, and scannable artifacts perform like living art.
            We orchestrate data, light, and motion so your teams gain clarity, your guests feel the vibe, and your business grows
            with integrity.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="button-primary">
              Discover services
            </Link>
            <a href="#contact" className="button-secondary">
              View live insights
            </a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="orb orb-large" />
          <div className="orb orb-small" />
          <div className="grid" />
        </div>
      </section>
      <section className="metrics-section">
        <div className="section-heading">
          <p className="eyebrow">Performance as art</p>
          <h2>IoT intelligence that hits the metrics and the feels</h2>
          <p>
            A 2023 Accenture pulse shows 74% of executives plan to expand IoT-enabled ambience because it drives both ROI and brand
            affinity. We translate rigorous analytics into poetic experiences that invite guests to interact again and again.
          </p>
        </div>
        <div className="metrics-grid">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
      </section>
      <section className="process-section">
        <div className="section-heading">
          <p className="eyebrow">Imagine · Engineer · Optimize</p>
          <h2>Responsive environments tuned to your story</h2>
          <p>
            From scannable sculptures to adaptive lighting, we prototype swiftly, deploy ethically, and iterate with insights so
            your operations feel effortless.
          </p>
        </div>
        <div className="process-grid">
          <div className="process-card">
            <h3>Prototyping</h3>
            <p>Rapid concepting with local artists and makers to visualize your connected experience.</p>
          </div>
          <div className="process-card">
            <h3>Deployment</h3>
            <p>Installation crews integrate devices, signage, and analytics without disrupting daily flow.</p>
          </div>
          <div className="process-card">
            <h3>Optimization</h3>
            <p>Continuous tuning with dashboards and human-centered adjustments that keep the vibe dialed in.</p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default Home;
