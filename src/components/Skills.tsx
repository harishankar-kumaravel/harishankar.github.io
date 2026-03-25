import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Skills: React.FC = () => {
  const skillsData = [
    { name: 'GRAPHIC DESIGN', desc: 'Photoshop & Illustrator — branding, print collateral, digital ads, packaging, and social media creatives.', pct: '95%' },
    { name: 'MOTION GRAPHICS', desc: 'After Effects & Premiere — TVC, logo animations, social media videos, and brand motion content.', pct: '92%' },
    { name: 'ILLUSTRATION', desc: 'Adobe Illustrator — vector illustration, custom graphics, and character/icon design.', pct: '88%' },
    { name: 'VIDEO EDITING', desc: 'Premiere Pro & DaVinci Resolve — cinematic editing, colour grading, and post-production.', pct: '85%' },
    { name: 'UI/UX DESIGN', desc: 'Figma — interface design, wireframing, prototyping, and user experience research.', pct: '80%' },
    { name: 'AI IMAGE GEN', desc: 'AI-assisted image generation and creative ideation seamlessly integrated into design workflows.', pct: '85%' },
    { name: '3D MODELLING', desc: '3D modelling, rendering, and product visualisation for brand and creative projects.', pct: '70%' },
    { name: 'ROTOSCOPING', desc: 'Frame-by-frame rotoscoping for VFX compositing and clean visual effects production.', pct: '75%' },
    { name: 'DIGITAL MARKETING', desc: 'Campaign design, social content strategy, and visual assets for digital marketing initiatives.', pct: '72%' },
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
