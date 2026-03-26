import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { ref, reveal } = useScrollReveal();

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-top-nav">
            <span>Services</span>
            <span>Works</span>
            <span>Blog</span>
          </div>

          <div className={`hero-tag reveal ${reveal ? 'visible' : ''}`}>
            Motion Graphic Designer
          </div>

          <h1 className={`hero-title reveal ${reveal ? 'visible' : ''}`}>
            <span className="line1">HARISHANKAR</span>
            <br />
            <span className="line2">KUMARAVEL</span>
          </h1>

          <p className={`hero-desc reveal ${reveal ? 'visible' : ''}`}>
            Expert in cinematic motion design, brand story animation, and visual effects for global campaigns. Concept-to-screen production, delivering performance-driven motion experiences.
          </p>

          <div className={`btn-group reveal ${reveal ? 'visible' : ''}`}>
            <a href="#projects" className="btn-primary">View Work</a>
            <a href="#contact" className="btn-ghost">Contact Now</a>
          </div>

          <div className="hero-meta reveal">
            <p>📍 Based in India · Available Globally</p>
            <p>✉ k.harish2323@gmail.com · ☎ +91 99524 55048</p>
          </div>
        </div>

        <div className={`hero-right reveal ${reveal ? 'visible' : ''}`}>
          <div className="hero-quote">
            <h4>An integrated studio-style motion portfolio with premium cinematic visuals.</h4>
            <p>Holds brand-first storytelling, UI motion, 2D/3D, and social hero content.</p>
          </div>

          <div className="hero-cards">
            <article className="hero-card">
              <span className="card-tag">Brand Campaign</span>
              <h5>TATA BlueScope Motion</h5>
              <p>Long-form TVC motion graphics for retail launch.</p>
            </article>
            <article className="hero-card">
              <span className="card-tag">TVC Film</span>
              <h5>Coromandel Story</h5>
              <p>Cinematic full-production visual narrative.</p>
            </article>
            <article className="hero-card">
              <span className="card-tag">Digital Series</span>
              <h5>F Gear Promo</h5>
              <p>Dynamic product motion visuals and animations.</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
