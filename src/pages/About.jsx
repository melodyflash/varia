import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 } })
};

const values = [
  {
    title: 'Community connectivity',
    text: 'We believe connection is more than devices—it’s the neighborhood. Every build respects local culture, empowers staff, and keeps data stewardship transparent.'
  },
  {
    title: 'Art-meets-tech craftsmanship',
    text: 'Our designers collaborate with muralists, projection artists, and fabrication studios to make IoT hardware feel like part of the story, not an afterthought.'
  },
  {
    title: 'Integrity-driven delivery',
    text: 'Variable Objects is woman-and-queer-led, West Coast proud, and obsessed with ethical sourcing, inclusive design, and honest project forecasting.'
  }
];

export default function About() {
  return (
    <div className="page about">
      <header className="page-header">
        <motion.h1 initial="hidden" animate="visible" variants={fadeIn}>
          About Variable Objects
        </motion.h1>
        <motion.p className="lede" initial="hidden" animate="visible" custom={1} variants={fadeIn}>
          We are an Ocean Beach collective of creative technologists, data strategists, and installation artists delivering
          smart spaces that keep people—and insights—flowing.
        </motion.p>
      </header>

      <section className="values">
        {values.map((value, index) => (
          <motion.article key={value.title} custom={index} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeIn}>
            <h2>{value.title}</h2>
            <p>{value.text}</p>
          </motion.article>
        ))}
      </section>

      <section className="contact-block">
        <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
          Let’s stay connected
        </motion.h2>
        <motion.p initial="hidden" whileInView="visible" custom={1} variants={fadeIn}>
          We operate across Southern California and the Pacific Northwest, with virtual deployments nationwide. Reach out via{' '}
          <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a> or call <a href="tel:16196636363">619-663-6363</a>.
        </motion.p>
        <motion.div className="contact-cards" initial="hidden" whileInView="visible" custom={2} variants={fadeIn}>
          <div>
            <h3>Studio</h3>
            <p>5080 Newport Ave<br />Ocean Beach, CA 92107</p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Tuesday – Saturday · 10a to 6p PT<br />Virtual consults by appointment</p>
          </div>
          <div>
            <h3>Collaborators</h3>
            <p>Lighting designers, fabrication labs, AV integrators, and research analysts ready to co-create.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
