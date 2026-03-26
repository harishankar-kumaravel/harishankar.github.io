import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector('.form-submit') as HTMLButtonElement;
    if (btn) {
      const originalText = btn.textContent;
      btn.textContent = 'Message Sent ✓';
      btn.style.opacity = '0.7';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.opacity = '1';
      }, 2000);
    }
    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      <nav>
        <a href="#" className="logo">A</a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-content fade-up">
          <div className="hero-tag">Motion Graphic Designer</div>
          <h1>Creating Motion,<br/>Telling Stories.</h1>
          <p className="hero-sub">Specializing in cinematic motion design, animation, and visual storytelling for brands.</p>
          <div className="hero-cta">
            <a href="#works" className="btn-primary">View Portfolio</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
          <div className="social-links">
            <a href="#" title="Behance">◆</a>
            <a href="#" title="Instagram">▲</a>
            <a href="#" title="LinkedIn">■</a>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-label fade-up">Expertise</div>
        <h2 className="fade-up">What I Create</h2>
        
        <div className="services-grid">
          <div className="service-card fade-up">
            <div className="service-icon">⬤</div>
            <h3 className="service-name">Motion Graphics</h3>
            <p className="service-desc">Animated explainer videos, promotional content, and dynamic visual sequences that captivate audiences.</p>
          </div>
          <div className="service-card fade-up">
            <div className="service-icon">◆</div>
            <h3 className="service-name">3D Animation</h3>
            <p className="service-desc">Complex 3D motion design, character animation, and architectural visualization for modern brands.</p>
          </div>
          <div className="service-card fade-up">
            <div className="service-icon">▲</div>
            <h3 className="service-name">Visual Effects</h3>
            <p className="service-desc">VFX compositing, color grading, and post-production magic that brings your vision to life.</p>
          </div>
        </div>
      </section>

      <section id="works">
        <div className="section-label fade-up">Portfolio</div>
        <h2 className="fade-up">Selected Works</h2>
        
        <div className="works-grid">
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">01</div>
            </div>
            <div className="work-info">
              <div className="work-name">Tech Brand Animation</div>
              <div className="work-cat">Motion Graphics · Brand</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">02</div>
            </div>
            <div className="work-info">
              <div className="work-name">3D Product Showcase</div>
              <div className="work-cat">3D Animation · Product</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">03</div>
            </div>
            <div className="work-info">
              <div className="work-name">Commercial VFX</div>
              <div className="work-cat">Visual Effects · Broadcast</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">04</div>
            </div>
            <div className="work-info">
              <div className="work-name">Cinematic Title Sequence</div>
              <div className="work-cat">Motion Design · Film</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-content fade-up">
          <h2>About Me</h2>
          <p className="about-text">
            I'm a motion graphic designer with a passion for cinematic storytelling and visual innovation. 
            With 10+ years of experience in animation and motion design, I've worked with leading brands 
            to create impactful visual narratives.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
          </div>
        </div>
        <div className="about-image fade-up" />
      </section>

      <section id="contact">
        <div className="contact-info fade-up">
          <h2>Let's Collaborate</h2>
          <p className="contact-text">
            Have a project that needs motion magic? I'd love to hear about it.
          </p>
          <a href="mailto:hello@example.com" className="contact-link">hello@example.com</a>
          <a href="tel:+1234567890" className="contact-link">+1 (234) 567-890</a>
        </div>

        <form className="contact-form fade-up" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="hello@example.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="Tell me about your project..." required />
          </div>
          <button type="submit" className="form-submit">Send Message</button>
        </form>
      </section>

      <footer>
        <p className="footer-copy">&copy; 2024 <strong>Motion Designer</strong>. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Behance</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
        </div>
      </footer>
    </>
  );
}

export default App;
