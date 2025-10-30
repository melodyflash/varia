import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { impactStats, serviceMetrics } from '../data/stats.js';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: 'easeOut' }
  })
};

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const subject = encodeURIComponent('Variable Objects Project Inquiry');
    const body = encodeURIComponent([
      `Name: ${data.get('name')}`,
      `Company: ${data.get('company') || 'N/A'}`,
      `Email: ${data.get('email')}`,
      '',
      data.get('message')
    ].join('\n'));
    window.location.href = `mailto:awesome3dpf@proton.me?subject=${subject}&body=${body}`;
    form.reset();
  };

  return (
    <div className="page home">
      <section className="hero">
        <motion.div initial="hidden" animate="visible" variants={fadeIn}>
          <p className="eyebrow">Ocean Beach · San Diego</p>
          <h1>
            Where artful IoT meets business intelligence.
          </h1>
          <p className="lede">
            Variable Objects designs immersive, ethical, and data-rich environments that delight customers, sharpen decisions,
            and keep the West Coast creatively connected.
          </p>
          <div className="hero-actions">
            <a className="cta-button" href="/#contact">
              Book a discovery call
              <span className="cta-border" />
            </a>
            <Link className="ghost-button" to="/services">
              Explore services
              <span className="cta-border" />
            </Link>
          </div>
        </motion.div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1 }}>
          <div className="orbital">
            <span className="orbital-dot" />
            <span className="orbital-dot" />
            <span className="orbital-dot" />
          </div>
        </motion.div>
      </section>

      <section className="stats" aria-label="Impact metrics">
        {impactStats.map((stat, index) => (
          <motion.article key={stat.value} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={fadeIn}>
            <h3>{stat.value}</h3>
            <p>{stat.description}</p>
            <span className="source">Source: {stat.source}</span>
          </motion.article>
        ))}
      </section>

      <section className="snippet-section">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          Smart, artistic experiences that crush friction points
        </motion.h2>
        <div className="snippet-grid">
          {serviceMetrics.map((metric, index) => (
            <motion.div key={metric.title} className="snippet-card" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeIn}>
              <p className="metric">{metric.figure}</p>
              <h3>{metric.title}</h3>
              <p>{metric.detail}</p>
              <span className="source">{metric.citation}</span>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="process" aria-label="Approach">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          Imagine · Engineer · Optimize
        </motion.h2>
        <motion.p className="lede" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          We blend industrial design, interactive media, and edge analytics to craft IoT ecosystems that look as good as they
          perform. From hospitality floors to creative offices, we champion community trust, transparency, and measurable ROI.
        </motion.p>
        <div className="process-grid">
          {["Discovery mapping","Creative prototyping","Deployment & training","Insight loops"].map((item, index) => (
            <motion.div key={item} className="process-card" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.6 }} variants={fadeIn}>
              <h3>{item}</h3>
              <p>
                {index === 0 && 'Audit guest journeys, staff workflows, and brand cues to pinpoint artistic IoT wins.'}
                {index === 1 && 'Rapidly mock connected artifacts and dynamic ambiance that thrill senses and solve friction.'}
                {index === 2 && 'Orchestrate devices, secure networking, and ethical data stewardship with on-site artistry.'}
                {index === 3 && 'Feed live dashboards, alerts, and creative refresh cycles that keep the experience evergreen.'}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="contact" id="contact">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeIn}>
          <h2>Let’s create beautiful performance.</h2>
          <p>
            Share the vibe you want to build. We’ll reply within one business day with ideas, budget ranges, and next steps.
          </p>
        </motion.div>
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
        >
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label>
            Company
            <input type="text" name="company" placeholder="Brand or organization" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" required />
          </label>
          <label>
            Project vision
            <textarea name="message" rows="5" placeholder="Tell us about the experience you’re dreaming up." required />
          </label>
          <button type="submit" className="cta-button">
            Send it
            <span className="cta-border" />
          </button>
        </motion.form>
      </section>
    </div>
  );
}
