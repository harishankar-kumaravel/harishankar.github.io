import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

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
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#works">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <button 
              className="theme-toggle" 
              onClick={() => setIsDark(!isDark)}
              title={isDark ? 'Light Mode' : 'Dark Mode'}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-content fade-up">
          <div className="hero-tag">Motion Graphic & Graphic Designer</div>
          <h1>Creative Design,<br/>Motion & Animation.</h1>
          <p className="hero-sub">Currently at Elegance Enterprises as a Motion Graphic & Graphic Designer. Specialized in designing for 25+ global brands, motion graphics, UI/UX, and visual storytelling. 1000+ projects completed with industry-leading tools.</p>
          <div className="hero-cta">
            <a href="#works" className="btn-primary">View Portfolio</a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
          <div className="social-links">
            <a href="https://www.behance.net/Harishankar_K" target="_blank" rel="noopener noreferrer" title="Behance">◆</a>
            <a href="mailto:k.harish2323@gmail.com" title="Email">▲</a>
            <a href="tel:+919952455048" title="Phone">■</a>
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="section-label fade-up">Journey</div>
        <h2 className="fade-up">Work Experience</h2>
        
        <div className="experience-timeline">
          <div className="exp-item fade-up">
            <div className="exp-dot"></div>
            <div className="exp-content">
              <h3>Graphic / Motion Graphic Designer</h3>
              <p className="exp-company">Elegance Enterprises · Full-time</p>
              <p className="exp-duration">Sep 2025 - Present · 7 months</p>
              <p className="exp-location">Bengaluru, Karnataka, India · On-site</p>
            </div>
          </div>
          <div className="exp-item fade-up">
            <div className="exp-dot"></div>
            <div className="exp-content">
              <h3>Graphic Designer</h3>
              <p className="exp-company">Aranyakaa Farms</p>
              <p className="exp-duration">Sep 2025 - Present · 7 months</p>
              <p className="exp-location">Bengaluru, Karnataka, India · Hybrid</p>
            </div>
          </div>
          <div className="exp-item fade-up">
            <div className="exp-dot"></div>
            <div className="exp-content">
              <h3>Graphic / Motion Graphic Designer</h3>
              <p className="exp-company">Rhino Creative Agency</p>
              <p className="exp-duration">Oct 2024 - Aug 2025 · 1 year 2 months</p>
              <p className="exp-location">Chennai, Tamil Nadu, India · Remote</p>
              <div className="exp-roles">
                <p><strong>Graphic Designer</strong> (Oct 2024 - Aug 2025, 11 months)</p>
                <p><strong>Jr. Graphic Designer</strong> (Jul - Oct 2024, 4 months)</p>
                <p className="exp-skills">Skills: Corporate Branding, AI Image Generation, Motion Graphics</p>
              </div>
            </div>
          </div>
          <div className="exp-item fade-up">
            <div className="exp-dot"></div>
            <div className="exp-content">
              <h3>Motion Graphic Designer</h3>
              <p className="exp-company">Fgear · Full-time</p>
              <p className="exp-duration">Apr - Jun 2024 · 3 months</p>
              <p className="exp-location">Bengaluru, Karnataka, India · On-site</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="section-label fade-up">Expertise</div>
        <h2 className="fade-up">Core Competencies</h2>
        
        <div className="services-grid">
          <div className="service-card fade-up">
            <div className="service-icon">⬤</div>
            <h3 className="service-name">Graphic Design</h3>
            <p className="service-desc">Logo design, branding materials, print collateral, packaging, and print design using Photoshop & Illustrator.</p>
          </div>
          <div className="service-card fade-up">
            <div className="service-icon">◆</div>
            <h3 className="service-name">Motion Graphics</h3>
            <p className="service-desc">Motion graphics, video editing, animated sequences, and kinetic typography using After Effects & Premiere Pro.</p>
          </div>
          <div className="service-card fade-up">
            <div className="service-icon">▲</div>
            <h3 className="service-name">UI/UX & Digital</h3>
            <p className="service-desc">UI/UX design with Figma, digital ads, social media content, AI image generation, and illustration.</p>
          </div>
        </div>
      </section>

      <section id="works">
        <div className="section-label fade-up">Portfolio</div>
        <h2 className="fade-up">Client Projects</h2>
        
        <div className="works-grid">
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">01</div>
            </div>
            <div className="work-info">
              <div className="work-name">Tata BlueScope Steel</div>
              <div className="work-cat">Branding · Print Design</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">02</div>
            </div>
            <div className="work-info">
              <div className="work-name">Mizaj (India & Dubai)</div>
              <div className="work-cat">Digital · Brand Design</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">03</div>
            </div>
            <div className="work-info">
              <div className="work-name">Coromandel International</div>
              <div className="work-cat">Packaging · Print</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">04</div>
            </div>
            <div className="work-info">
              <div className="work-name">Namma Grocery</div>
              <div className="work-cat">Branding · Digital</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">05</div>
            </div>
            <div className="work-info">
              <div className="work-name">SaleleadIT</div>
              <div className="work-cat">UI/UX · Web Design</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">06</div>
            </div>
            <div className="work-info">
              <div className="work-name">Darzee</div>
              <div className="work-cat">Motion Graphics · Video</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">07</div>
            </div>
            <div className="work-info">
              <div className="work-name">G Square</div>
              <div className="work-cat">Design · Brand Development</div>
            </div>
          </div>
          <div className="work-card fade-up">
            <div className="work-thumb">
              <div className="work-number">08</div>
            </div>
            <div className="work-info">
              <div className="work-name">Global Brand Portfolio</div>
              <div className="work-cat">Design · Motion · Illustration</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="about-content fade-up">
          <h2>About Me</h2>
          <p className="about-text">
            I'm a Motion Graphic & Graphic Designer at Elegance Enterprises with a progressive career spanning multiple organizations. Starting as Junior Graphic Designer at Rhino Creative Agency, I've progressed through roles at Fgear and Aranyakaa Farms, now leading design initiatives at Elegance Enterprises. 
            I've delivered 1000+ projects for 25+ clients globally, specializing in corporate branding, motion graphics, UI/UX design, and AI-powered visual solutions. 
            Expert in Photoshop, Illustrator, After Effects, Premiere Pro, Figma, and DaVinci Resolve. Passionate about creating engaging content that drives compelling brand storytelling and visual innovation.
          </p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">25+</div>
              <div className="stat-label">Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Projects</div>
            </div>
          </div>
        </div>
        <div className="about-image fade-up" />
      </section>

      <section id="contact">
        <div className="contact-info fade-up">
          <h2>Let's Collaborate</h2>
          <p className="contact-text">
            Have a project that needs creative design or motion graphics? I'd love to hear about it. 
            Feel free to reach out via email or phone.
          </p>
          <a href="mailto:k.harish2323@gmail.com" className="contact-link">k.harish2323@gmail.com</a>
          <a href="tel:+919952455048" className="contact-link">+91 9952455048</a>
          <a href="https://www.behance.net/Harishankar_K" target="_blank" rel="noopener noreferrer" className="contact-link">View Full Portfolio on Behance</a>
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
        <p className="footer-copy">&copy; 2024 <strong>Harishankar K</strong>. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://www.behance.net/Harishankar_K" target="_blank" rel="noopener noreferrer">Behance</a>
          <a href="mailto:k.harish2323@gmail.com">Email</a>
          <a href="tel:+919952455048">Phone</a>
        </div>
      </footer>
    </>
  );
}

export default App;
