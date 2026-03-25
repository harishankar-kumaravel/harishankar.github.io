import React from 'react';

const Experience: React.FC = () => {
  const jobs = [
    {
      title: 'Graphic / Motion Graphic Designer',
      company: 'Elegance Enterprises',
      period: 'Sep 2025 – Present',
      location: 'Bengaluru · Full-time',
      description: 'Graphic and motion graphic design for brand campaigns, social content, and visual communication.',
    },
    {
      title: 'Graphic Designer',
      company: 'Aranyakaa Farms',
      period: 'Sep 2025 – Present',
      location: 'Bengaluru · Hybrid',
      description: 'Visual branding and marketing design for an eco-conscious farm brand.',
    },
    {
      title: 'Graphic Designer',
      company: 'Rhino Creative Agency',
      period: 'Jul 2024 – Aug 2025',
      location: 'Chennai · Remote',
      description: 'Designed creative assets for global clients — TATA BlueScope Steel (India), Mizaj (India & Dubai), Coromandel International, Namma Grocery (Germany), SaleleadIT (Canada), Darzee (USA), and G Square (India).',
    },
    {
      title: 'Motion Graphic Designer',
      company: 'Fgear',
      period: 'Apr 2024 – Jun 2024',
      location: 'Bengaluru · Full-time',
      description: 'Promotional motion graphics and video content for F Gear\'s product campaigns.',
    },
  ];

  const education = [
    {
      degree: 'B.Sc — Animation & VFX',
      school: 'Aakaash Institute Media Studies, Annamalai University, Pondicherry',
      period: '2020 – 2023',
      cgpa: 'CGPA: 8.6',
      description: 'Team Leader for Animation Department. Specialised in Motion Graphics, VFX, and Adobe Creative Suite.',
    },
    {
      degree: 'Diploma — Mechanical Engineering',
      school: 'Sri Venkatachalapathy Polytechnic College, Kappiyampuliyur, Villupuram',
      period: '2017 – 2020',
      cgpa: 'CGPA: 8.4',
      description: 'Project Head. Science Club Leader. Strong analytical foundation that informs design thinking and problem-solving.',
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
