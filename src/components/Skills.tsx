import React from 'react';

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'AFTER EFFECTS', desc: 'Advanced motion graphics, visual effects, and complex animations for TVCs and brand campaigns.', pct: '95%' },
    { name: 'CINEMA 4D', desc: '3D modeling, texturing, lighting, and rendering for cinematic motion graphics and product visualization.', pct: '88%' },
    { name: 'PREMIERE PRO', desc: 'Professional video editing, color grading, and post-production for broadcast and digital content.', pct: '92%' },
    { name: 'MOTION DESIGN', desc: 'Character animation, logo reveals, kinetic typography, and dynamic visual storytelling.', pct: '90%' },
    { name: 'VISUAL EFFECTS', desc: 'Compositing, rotoscoping, particle systems, and advanced VFX techniques.', pct: '85%' },
    { name: 'STORYBOARDING', desc: 'Visual planning, shot composition, and narrative sequencing for motion projects.', pct: '82%' },
    { name: 'GRAPHIC DESIGN', desc: 'Photoshop & Illustrator for concept art, UI elements, and motion graphics assets.', pct: '88%' },
    { name: 'VIDEO PRODUCTION', desc: 'Full production pipeline from pre-production to final delivery and client presentation.', pct: '80%' },
    { name: 'AI INTEGRATION', desc: 'AI-powered tools for enhanced creativity, automated workflows, and innovative design solutions.', pct: '75%' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="section-header reveal">
        <span className="section-num">03</span>
        <h2 className="section-title">SKILLS</h2>
        <div className="section-line"></div>
      </div>
      <div className="skills-grid">
        {skillsData.map((skill, idx) => (
          <div key={idx} className="skill-cell reveal" data-num={String(idx + 1).padStart(2, '0')}>
            <div className="skill-name">{skill.name}</div>
            <div className="skill-desc">{skill.desc}</div>
            <div className="skill-bar-wrap">
              <div className="skill-bar"></div>
            </div>
            <div className="skill-pct">{skill.pct}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
