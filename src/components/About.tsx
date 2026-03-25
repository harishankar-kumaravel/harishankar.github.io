import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="section-header reveal">
        <span className="section-num">01</span>
        <h2 className="section-title">ABOUT ME</h2>
        <div className="section-line"></div>
      </div>
      <div className="about-grid">
        <div className="about-text reveal">
          <p>
            I'm <strong>Harishankar K</strong>, a creative and versatile <strong>Motion Graphic & Graphic Designer</strong> based in India. I have delivered high-quality design assets for global clients across India, Dubai, Germany, Canada, and the USA.
          </p>
          <p>
            Skilled in digital design tools and AI image generation, with a foundational passion for motion graphics. I adapt visuals to diverse brand identities and work effectively under tight deadlines. Eager to create engaging content that drives brand storytelling.
          </p>
          <p>
            📞 <strong>9952455048</strong> &nbsp;·&nbsp; ✉ <strong>k.harish2323@gmail.com</strong>
          </p>
        </div>
        <div className="about-highlights reveal">
          <div className="highlight-item">
            <div className="highlight-icon">🌍</div>
            <div>
              <div className="highlight-title">Global Client Experience</div>
              <div className="highlight-desc">
                TATA, Coromandel, Mizaj (Dubai), Namma Grocery (Germany), SaleleadIT (Canada), Darzee (USA), G Square.
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <div>
              <div className="highlight-title">Leadership</div>
              <div className="highlight-desc">
                Team Leader for Animation Dept (UG) · Project Head (Diploma) · Science Club Leader.
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">⚡</div>
            <div>
              <div className="highlight-title">Core Strengths</div>
              <div className="highlight-desc">
                Analytical problem-solving, deadline-driven, strong communicator, team collaborator, design challenge solver.
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">✦</div>
            <div>
              <div className="highlight-title">Availability</div>
              <div className="highlight-desc">
                Open for freelance projects & full-time roles. Quick turnaround, diverse brand adaptation.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
