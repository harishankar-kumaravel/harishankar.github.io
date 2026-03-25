import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to a backend service
    console.log('Form submitted:', formData);
    const btn = (e.target as HTMLFormElement).querySelector('.btn-submit') as HTMLButtonElement;
    if (btn) btn.textContent = 'Message sent!';
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      if (btn) btn.textContent = 'Send Message';
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="section-header reveal">
        <span className="section-num">05</span>
        <h2 className="section-title">CONTACT</h2>
        <div className="section-line"></div>
      </div>
      <div className="contact-wrap">
        <div className="contact-info reveal">
          <h3>LET'S BUILD SOMETHING <span style={{ color: 'var(--accent)' }}>GREAT</span></h3>
          <p>Open for freelance projects and full-time roles. Global clients welcome. Quick turnaround, strong deadline commitment.</p>
          <div className="contact-links">
            <a href="mailto:k.harish2323@gmail.com" className="contact-link">
              <span className="contact-link-icon">✉</span>
              <span className="contact-link-label">k.harish2323@gmail.com</span>
            </a>
            <a href="tel:+919952455048" className="contact-link">
              <span className="contact-link-icon">📞</span>
              <span className="contact-link-label">+91 99524 55048</span>
            </a>
            <a href="https://www.behance.net/Harishankar_K" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">◈</span>
              <span className="contact-link-label">Behance — Harishankar_K</span>
            </a>
            <a href="https://www.linkedin.com/in/harishankar-k-1072b5232" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="contact-link-icon">◉</span>
              <span className="contact-link-label">LinkedIn Profile</span>
            </a>
          </div>
        </div>
        <div className="reveal">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Project Type</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option>Brand Identity</option>
                <option>UI/UX Design</option>
                <option>Motion Design</option>
                <option>Editorial / Print</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn-submit">Send Message</button>
            {submitted && (
              <div className="form-success">✦ Message sent! I'll get back to you within 24 hours.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
