import React from 'react';
import { Link } from 'react-router-dom';
import { heroMetrics } from '../data/content.js';

export const LandingPage = () => (
  <>
    <section className="hero">
      <div className="hero-content">
        <p className="section-eyebrow">Ocean Beach • San Diego • IoT Atelier</p>
        <h1 className="hero-title">
          Art-forward <span>IoT storytelling</span> built to grow loyal communities
        </h1>
        <p className="hero-subtitle">
          Variable Objects choreographs smart artifacts, responsive lighting, and analytics so your business feels alive in
          the moment and effortless behind the scenes. We partner with hospitality, retail, and cultural teams to craft
          experiences that invite repeat visits while protecting staff time.
        </p>
        <div className="hero-cta">
          <Link className="button-primary" to="/contact">
            Schedule an immersion call
          </Link>
          <Link className="button-secondary" to="/services">
            Explore services
          </Link>
        </div>
      </div>
      <div className="responsive-media" aria-hidden="true">
        <div className="signal-lines" />
      </div>
    </section>
    <section className="section">
      <header className="section-header">
        <p className="section-eyebrow">Why businesses invest now</p>
        <h2 className="section-title">IoT + business intelligence is a proven lever for ROI and loyalty</h2>
        <p className="section-subtitle">
          We translate recent studies into action: purposeful device choreography, purposeful art direction, and dashboards
          designed to spark decisions.
        </p>
      </header>
      <div className="metrics-grid">
        {heroMetrics.map((metric) => (
          <article className="metric-card" key={metric.label}>
            <h3 className="metric-value">{metric.stat}</h3>
            <p className="metric-label">{metric.label}</p>
            <p>{metric.description}</p>
          </article>
        ))}
      </div>
    </section>
    <section className="section">
      <header className="section-header">
        <p className="section-eyebrow">Services snapshot</p>
        <h2 className="section-title">From scan-to-story artifacts to living analytics</h2>
        <p className="section-subtitle">
          Modular programs adapt to your brand. Every deployment is fabricated with custom finishes and wrapped in data-backed
          coaching.
        </p>
      </header>
      <div className="hero-cta">
        <Link className="button-primary" to="/services">
          See offerings
        </Link>
        <Link className="button-secondary" to="/case-studies">
          Browse case studies
        </Link>
      </div>
    </section>
  </>
);

export default LandingPage;
