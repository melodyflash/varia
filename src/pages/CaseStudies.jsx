const studies = [
  {
    title: 'Starbucks Reserve Roasteries',
    summary:
      'Interactive tasting bars with NFC-enabled coasters let guests explore sourcing stories, boosting premium merchandise sales by double digits.',
    alignment:
      'We design scannable artifacts that mirror this curiosity-driven storytelling while integrating your POS and loyalty stack.',
  },
  {
    title: 'Meow Wolf Immersive Exhibits',
    summary:
      'Responsive lighting, audio, and projection loops adapt to visitor presence, keeping dwell times high and social buzz constant.',
    alignment:
      'Our creative technologists craft similar adaptive atmospheres for retail, hospitality, and cultural spaces with measurable KPIs.',
  },
  {
    title: 'Amazon Fresh & Go Stores',
    summary:
      'Computer vision, sensors, and automated checkouts shrink friction and provide a steady stream of inventory intelligence.',
    alignment:
      'We deploy sensor frameworks that deliver real-time notifications and analytics to empower your teams with the same clarity.',
  },
  {
    title: 'San Diego Airport Smart Curbside',
    summary:
      'IoT-enabled signage and queue management tools cut wait times and improved traveler satisfaction scores 24% in pilot runs.',
    alignment:
      'Variable Objects brings responsive signage and analytics to local businesses craving that same smooth, reassuring flow.',
  },
];

const CaseStudies = () => {
  return (
    <div className="page case-studies-page">
      <section className="section-heading">
        <p className="eyebrow">Proof in the experiences</p>
        <h1>Case studies inspiring our craft</h1>
        <p>
          From household names to local pioneers, these stories demonstrate how artful IoT ecosystems unlock loyalty, efficiency,
          and cultural resonance.
        </p>
      </section>
      <div className="case-grid">
        {studies.map((study) => (
          <article key={study.title} className="case-card">
            <h2>{study.title}</h2>
            <p>{study.summary}</p>
            <p className="case-alignment">{study.alignment}</p>
          </article>
        ))}
      </div>
      <section className="callout">
        <h2>Ready to script your own success story?</h2>
        <p>Let&apos;s co-create an installation that feels like tomorrow and performs for decades.</p>
      </section>
    </div>
  );
};

export default CaseStudies;
