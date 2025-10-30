import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { caseStudies } from '../data/stats.js';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } })
};

export default function CaseStudies() {
  return (
    <div className="page case-studies">
      <header className="page-header">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          Proven magic in the wild
        </motion.h1>
        <motion.p className="lede" initial="hidden" animate="visible" custom={1} variants={fadeIn}>
          We draw inspiration from innovators who marry IoT with storytelling. Explore public wins that echo the experiences we
          design for independent brands.
        </motion.p>
      </header>
      <section className="case-grid">
        {caseStudies.map((study, index) => (
          <motion.article key={study.title} className="case-card" custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
            <h2>{study.title}</h2>
            <p>{study.summary}</p>
            <p className="alignment">How it relates: {study.alignment}</p>
          </motion.article>
        ))}
      </section>
      <section className="cta-banner">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
          <h2>Ready to script your own case study?</h2>
          <p>
            Our team tailors research-backed IoT artistry to your brand voice, staff rhythms, and community vibe. Let’s co-create
            a success worth bragging about.
          </p>
          <Link className="cta-button" to="/#contact">
            Start collaborating
            <span className="cta-border" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
