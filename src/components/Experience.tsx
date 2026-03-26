import React from 'react';

const Experience: React.FC = () => {
  const jobs = [
    {
      title: 'Senior Motion Graphic Designer',
      company: 'Elegance Enterprises',
      period: 'Sep 2023 – Present',
      location: 'Bengaluru · Full-time',
      description: 'Leading motion graphics production for major brand campaigns, creating cinematic TVCs and digital content that increased client engagement metrics.',
    },
    {
      title: 'Motion Graphics Specialist',
      company: 'Rhino Creative Agency',
      period: 'Jul 2022 – Aug 2023',
      location: 'Chennai · Remote',
      description: 'Produced motion graphics for global clients including TATA, Coromandel, and international brands. Specialized in complex animations and visual effects.',
    },
    {
      title: 'Motion Designer & VFX Artist',
      company: 'F Gear Studios',
      period: 'Apr 2021 – Jun 2022',
      location: 'Bengaluru · Full-time',
      description: 'Created high-impact product animations and promotional videos using advanced After Effects techniques and 3D integration.',
    },
    {
      title: 'Freelance Motion Designer',
      company: 'Various Clients',
      period: 'Jan 2020 – Mar 2021',
      location: 'Remote',
      description: 'Delivered motion graphics projects for startups and established brands, building a portfolio of diverse animation styles and techniques.',
    },
  ];

  const education = [
    {
      degree: 'B.Sc — Animation & Visual Effects',
      school: 'Aakaash Institute Media Studies, Annamalai University',
      period: '2020 – 2023',
      cgpa: 'CGPA: 8.6',
      description: 'Specialized in Motion Graphics, VFX, and Digital Animation. Led animation department projects and mastered industry-standard software including After Effects, Cinema 4D, and Premiere Pro.',
    },
    {
      degree: 'Motion Graphics Certification',
      school: 'Online Learning Platforms',
      period: '2019 – 2020',
      cgpa: 'Advanced Level',
      description: 'Completed advanced courses in motion design, visual effects, and 3D animation. Developed expertise in cinematic techniques and professional production workflows.',
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header reveal">
        <span className="section-num">02</span>
        <h2 className="section-title">EXPERIENCE</h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-grid">
        {jobs.map((job, idx) => (
          <div key={idx} className="highlight-item reveal">
            <div className="job-header">
              <div>
                <div className="highlight-title">{job.title}</div>
                <div className="job-company">{job.company}</div>
              </div>
              <div className="job-period">
                {job.period}<br />{job.location}
              </div>
            </div>
            <div className="highlight-desc">{job.description}</div>
          </div>
        ))}
      </div>

      <div className="education-section">
        <div className="section-header reveal" style={{ marginBottom: '40px' }}>
          <span className="section-num" style={{ fontSize: '13px' }}>EDU</span>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '36px', letterSpacing: '1px' }}>EDUCATION</h3>
          <div className="section-line"></div>
        </div>
        <div className="education-grid">
          {education.map((edu, idx) => (
            <div key={idx} className="highlight-item reveal">
              <div className="edu-header">
                <div>
                  <div className="highlight-title">{edu.degree}</div>
                  <div className="edu-school">{edu.school}</div>
                </div>
                <div className="edu-period">
                  {edu.period}<br />{edu.cgpa}
                </div>
              </div>
              <div className="highlight-desc">{edu.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="certification reveal" style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', padding: '24px 32px', border: '1px solid var(--border)', background: 'var(--bg3)' }}>
          <div style={{ fontSize: '28px' }}>🏆</div>
          <div>
            <div className="highlight-title">Adobe After Effects CC — Certified</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)' }}>
              Udemy · Issued May 2024 · Credential ID: UC-9fea4728-39ae-4c89-a05a-if1a95a775b9
            </div>
          </div>
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--ff-mono)', fontSize: '10px', color: 'var(--accent)', letterSpacing: '1px' }}>
            Animation / Motion Graphics
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
