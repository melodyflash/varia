import React from 'react';
import { services } from '../data/content.js';
import { Icon } from '../components/Icon.jsx';

export const ServicesPage = () => (
  <section className="section">
    <header className="section-header">
      <p className="section-eyebrow">Services</p>
      <h1 className="section-title">Integrated IoT artistry built for measurable impact</h1>
      <p className="section-subtitle">
        We design, fabricate, deploy, and maintain IoT experiences that fuse aesthetics with analytics. Each engagement blends
        discovery workshops, installation choreography, staff enablement, and insight reviews backed by documented metrics.
      </p>
    </header>
    <div className="card-grid">
      {services.map((service) => (
        <article className="service-card" key={service.title}>
          <span className="card-icon">
            <Icon name={service.icon} />
          </span>
          <h2>{service.title}</h2>
          <p>{service.summary}</p>
          <p>
            <strong>Why it matters:</strong> {service.insight}
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesPage;
