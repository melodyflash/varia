import { motion } from 'framer-motion';
import { serviceMetrics } from '../data/stats.js';

const services = [
  {
    title: 'Customer scannable artifacts',
    description:
      'Beautiful NFC, QR, and projection-mapped objects summon menus, product stories, Wi-Fi, or payments on-demand, streamlining service without sacrificing ambiance.',
    bullets: [
      'Custom sculpted tablets, menu plinths, and artist-made plaques that feel on-brand.',
      'Secure integrations with POS, inventory, FAQ, and loyalty tools.',
      'Analytics on what guests explore most, so you can refine merchandising in real time.'
    ]
  },
  {
    title: 'Responsive signage, lights, and decor',
    description:
      'Lighting, projection, holographic textures, and kinetic sculptures that adapt to occupancy and mood. Queue entertainment becomes a shareable, return-worthy experience.',
    bullets: [
      'Ambient scenes shift with time of day, playlist, or campaign data.',
      'Gamified waiting areas and story-driven installations deepen dwell time.',
      'Creative tech directors ensure every pixel serves the brand promise.'
    ]
  },
  {
    title: 'Automated sensing & alerts',
    description:
      'Discrete sensors monitor temperature, stock levels, queue lengths, and asset movement—feeding staff actionable alerts before issues escalate.',
    bullets: [
      'Edge AI reduces false alarms while protecting privacy with on-device processing.',
      'Loss prevention dashboards surface underperforming zones instantly.',
      'Event-driven automations trigger lighting, staff comms, or service tickets.'
    ]
  },
  {
    title: 'Analytics & decision intelligence',
    description:
      'Unified dashboards visualize how creative interventions influence revenue, retention, and team efficiency so you can iterate with confidence.',
    bullets: [
      'KPI canvases tailored to hospitality, retail, and cultural venues.',
      'Data storytelling that leaders can act on without wading through noise.',
      'Ethical data stewardship agreements that center transparency and consent.'
    ]
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } })
};

export default function Services() {
  return (
    <div className="page services">
      <header className="page-header">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Services with a dash of spark
        </motion.h1>
        <motion.p className="lede" initial="hidden" animate="visible" custom={1} variants={fadeIn}>
          We choreograph technology, artistry, and operations science to remove friction while keeping your brand magnetic.
        </motion.p>
      </header>

      <section className="service-list">
        {services.map((service, index) => (
          <motion.article key={service.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeIn}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <ul>
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </section>

      <section className="service-metrics" aria-label="Why IoT-forward matters">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          Why modern operators go IoT-forward
        </motion.h2>
        <div className="snippet-grid">
          {serviceMetrics.map((metric, index) => (
            <motion.div key={metric.title} className="snippet-card" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
              <p className="metric">{metric.figure}</p>
              <h3>{metric.title}</h3>
              <p>{metric.detail}</p>
              <span className="source">Source: {metric.citation}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
