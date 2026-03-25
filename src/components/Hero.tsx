import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Hero: React.FC = () => {
  const { reveal } = useScrollReveal();

  return (
    <section id="hero" className="hero">
      <div className="hero-bg-line"></div>
      <div className="hero-circle"></div>
      <div className="hero-left">
        <div className={`hero-tag reveal ${reveal ? 'visible' : ''}`}>
          Graphic & Motion Designer
        </div>
        <h1 className={`hero-title reveal ${reveal ? 'visible' : ''}`}>
          <span className="line1">HARI</span><br />
          <span className="line2">SHANKAR</span><br />
          <span className="line1">K</span>
        </h1>
        <p className={`hero-desc reveal ${reveal ? 'visible' : ''}`}>
          Motion Graphic & Graphic Designer with global client experience — TATA, Coromandel, Mizaj, Darzee & more. Skilled in Ps, Ai, Ae, Pr, Figma, 3D & AI Generation.
        </p>
        <div className={`btn-group reveal ${reveal ? 'visible' : ''}`}>
          <a href="#projects" className="btn-primary">View Work</a>
          <a href="#contact" className="btn-ghost">Get In Touch</a>
        </div>
      </div>
      <div className={`hero-right reveal ${reveal ? 'visible' : ''}`}>
        <div className="hero-stat-card">
          <div className="stat-num">2+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div className="hero-stat-card">
          <div className="stat-num">7+</div>
          <div className="stat-label">Global Clients</div>
        </div>
        <div className="hero-stat-card">
          <div className="stat-num">388+</div>
          <div className="stat-label">Behance Views</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
