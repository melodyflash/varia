import React from 'react';
import { values } from '../data/content.js';

export const AboutPage = () => (
  <section className="section">
    <header className="section-header">
      <p className="section-eyebrow">About us</p>
      <h1 className="section-title">Ocean Beach locals blending art, code, and community impact</h1>
      <p className="section-subtitle">
        We are designers, fabricators, and technologists who believe connection matters for people as much as it does for
        devices. From Ocean Beach to the Pacific Northwest and Baja, we deliver respectful, community-minded IoT ecosystems.
      </p>
    </header>
    <div className="split-layout">
      <article className="values-card">
        <h2>Contact</h2>
        <p>
          Phone: <a href="tel:16196636363">619 663 6363</a>
          <br />
          Email: <a href="mailto:awesome3dpf@proton.me">awesome3dpf@proton.me</a>
          <br />
          Studio: Ocean Beach, San Diego, CA
        </p>
        <p>
          We partner with independent businesses, cultural districts, and hospitality leaders seeking ethical data practices
          and expressive environments.
        </p>
      </article>
      <article className="values-card">
        <h2>Values in practice</h2>
        <ul className="values-list">
          {values.map((value) => (
            <li key={value.title}>
              <strong>{value.title}:</strong> {value.description}
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);

export default AboutPage;
