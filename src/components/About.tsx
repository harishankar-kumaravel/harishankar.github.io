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
            I'm <strong>Harishankar Kumaravel</strong>, a passionate <strong>Motion Graphic Designer</strong> who transforms concepts into compelling visual narratives. With expertise in After Effects, Premiere Pro, and cutting-edge animation techniques, I create cinematic experiences that tell stories and drive engagement.
          </p>
          <p>
            My work spans TV commercials, brand animations, social media content, and visual effects for clients across India, Dubai, Germany, Canada, and the USA. I combine technical proficiency with creative vision to deliver motion graphics that not only look stunning but also achieve measurable results.
          </p>
          <p>
            When I'm not crafting animations, you'll find me exploring new techniques in 3D animation, experimenting with AI-powered design tools, or mentoring aspiring motion designers.
          </p>
        </div>
        <div className="about-highlights reveal">
          <div className="highlight-item">
            <div className="highlight-icon">�</div>
            <div>
              <div className="highlight-title">Motion Graphics Specialist</div>
              <div className="highlight-desc">
                Expert in After Effects, Cinema 4D, and advanced animation techniques for TVCs, brand films, and digital campaigns.
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🌍</div>
            <div>
              <div className="highlight-title">Global Client Portfolio</div>
              <div className="highlight-desc">
                TATA, Coromandel, Mizaj (Dubai), Namma Grocery (Germany), SaleleadIT (Canada), Darzee (USA), and more.
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🏆</div>
            <div>
              <div className="highlight-title">Award-Winning Work</div>
              <div className="highlight-desc">
                Recognized for innovative motion design solutions and creative storytelling that drives brand engagement.
              </div>
            </div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">⚡</div>
            <div>
              <div className="highlight-title">Fast Turnaround</div>
              <div className="highlight-desc">
                Efficient workflow and project management ensuring high-quality deliverables within tight deadlines.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
