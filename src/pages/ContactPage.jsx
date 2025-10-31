import React from 'react';
import ContactForm from '../components/ContactForm.jsx';

export const ContactPage = () => (
  <section className="section">
    <header className="section-header">
      <p className="section-eyebrow">Contact</p>
      <h1 className="section-title">Let’s craft your next connected experience</h1>
      <p className="section-subtitle">
        Share your goals and we will assemble a concept mood board aligned to your brand, customer journey, and operational
        metrics. Our team replies within one business day.
      </p>
    </header>
    <div className="contact-panel">
      <article className="contact-card">
        <h2>Connect with the studio</h2>
        <p>
          Phone: <a href="tel:16196636363">619 663 6363</a>
          <br />
          Email: <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a>
          <br />
          Ocean Beach, San Diego, CA
        </p>
        <p>
          We partner across the US West Coast and beyond, centering ethical data practices and community stewardship in every
          engagement.
        </p>
      </article>
      <ContactForm />
    </div>
  </section>
);

export default ContactPage;
