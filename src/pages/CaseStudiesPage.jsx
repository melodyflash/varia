import React from 'react';
import { caseStudies } from '../data/content.js';

export const CaseStudiesPage = () => (
  <section className="section">
    <header className="section-header">
      <p className="section-eyebrow">Case studies</p>
      <h1 className="section-title">Public success stories that mirror our service pillars</h1>
      <p className="section-subtitle">
        We highlight celebrated IoT deployments to show how similar strategies transform hospitality, retail, and event spaces.
        Variable Objects tailors these blueprints to independent operators with artful, community-first execution.
      </p>
    </header>
    <div className="card-grid">
      {caseStudies.map((study) => (
        <article className="case-card" key={study.title}>
          <h2>{study.title}</h2>
          <p>{study.result}</p>
          <p className="case-stat">{study.stat}</p>
          <p>{study.detail}</p>
          <p className="case-footer">Inspired by public reporting from company press releases and industry analyses.</p>
        </article>
      ))}
    </div>
  </section>
);

export default CaseStudiesPage;
