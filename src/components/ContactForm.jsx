import React, { useState } from 'react';

export const ContactForm = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const subject = encodeURIComponent(`Project inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(
      `Company: ${data.get('company') || 'N/A'}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'N/A'}\nService focus: ${
        data.get('focus') || 'General'
      }\nTimeline: ${data.get('timeline') || 'Flexible'}\nMessage: ${data.get('message')}`
    );
    window.location.href = `mailto:awesome3dpf@proton.me?subject=${subject}&body=${body}`;
    setStatus('Thanks! Your email composer should be open—send it our way and we will reply within one business day.');
    form.reset();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Start a project conversation</h2>
      <label>
        Name
        <input name="name" type="text" required autoComplete="name" />
      </label>
      <label>
        Business or organization
        <input name="company" type="text" autoComplete="organization" />
      </label>
      <label>
        Email
        <input name="email" type="email" required autoComplete="email" />
      </label>
      <label>
        Phone
        <input name="phone" type="tel" autoComplete="tel" />
      </label>
      <label>
        Focus area
        <select name="focus" defaultValue="">
          <option value="" disabled>
            Choose an area
          </option>
          <option value="scan">Scannable menu artifacts</option>
          <option value="lighting">Responsive lighting & signage</option>
          <option value="sensors">Alerts & analytics dashboards</option>
          <option value="retainer">Creative analytics retainer</option>
        </select>
      </label>
      <label>
        Timeline
        <select name="timeline" defaultValue="">
          <option value="" disabled>
            Select a timeline
          </option>
          <option value="rush">0–6 weeks</option>
          <option value="quarter">6–12 weeks</option>
          <option value="season">3–6 months</option>
          <option value="flex">Just exploring</option>
        </select>
      </label>
      <label>
        Tell us more
        <textarea name="message" rows="4" required placeholder="Share goals, vibes, and the story you want to tell." />
      </label>
      <button type="submit" className="button-primary">
        Send introduction
      </button>
      {status && (
        <p role="status" aria-live="polite">
          {status}
        </p>
      )}
    </form>
  );
};

export default ContactForm;
