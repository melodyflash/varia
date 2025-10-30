import { useState } from 'react';
import AnimatedIcon from './AnimatedIcon.jsx';

const ContactCTA = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formState.email || !formState.message) {
      setStatus({ type: 'error', message: 'Please provide your email and a short message.' });
      return;
    }

    const body = encodeURIComponent(
      `Hello Variable Objects,%0D%0A%0D%0A${formState.message}%0D%0A%0D%0ACompany: ${formState.company || 'N/A'}%0D%0AName: ${formState.name || 'N/A'}%0D%0AEmail: ${formState.email}`
    );
    const subject = encodeURIComponent('Project inquiry from Variable Objects website');
    window.location.href = `mailto:awesome3dpf@proton.me?subject=${subject}&body=${body}`;
    setStatus({ type: 'success', message: 'Thanks! We opened your email client so you can finish sending.' });
    setFormState({ name: '', email: '', company: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-heading">
        <p className="eyebrow">Let&apos;s Create Beautiful Performance</p>
        <h2>Bring artful intelligence to your business</h2>
        <p>
          According to Deloitte, leaders investing in IoT-enhanced experiences report a 20% boost in customer satisfaction, and
          Cisco found smart environments can cut operational costs by up to 30%. We translate those gains into aesthetic,
          community-minded encounters.
        </p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          <span>Name</span>
          <input name="name" type="text" value={formState.name} onChange={handleChange} placeholder="You" />
        </label>
        <label>
          <span>Email *</span>
          <input name="email" type="email" value={formState.email} onChange={handleChange} placeholder="you@company.com" required />
        </label>
        <label>
          <span>Company</span>
          <input name="company" type="text" value={formState.company} onChange={handleChange} placeholder="Brand or venue" />
        </label>
        <label className="full-width">
          <span>Tell us about the opportunity *</span>
          <textarea
            name="message"
            rows="4"
            value={formState.message}
            onChange={handleChange}
            placeholder="Share what you are dreaming up"
            required
          />
        </label>
        <button type="submit" className="button-primary">
          <AnimatedIcon name="arrow" />
          <span>Start the conversation</span>
        </button>
        {status && <p className={`form-status ${status.type}`}>{status.message}</p>}
      </form>
    </section>
  );
};

export default ContactCTA;
