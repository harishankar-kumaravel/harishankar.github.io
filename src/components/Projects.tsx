import React from 'react';

const Projects: React.FC = () => {
  const projectsData = [
    {
      num: '01',
      featured: true,
      tag: 'In-Shop Branding · 2024',
      title: 'TATA BLUESCOPE STEEL',
      desc: 'In-shop branding and metro stall design for TATA BlueScope Steel — a large-scale retail branding project covering signage, display systems, and brand environment design.',
      tags: ['Branding', 'In-Shop', 'Retail', 'TATA'],
      link: 'https://www.behance.net/gallery/231830889/TATA-BlueScope-Steel-In-Shop-Branding-and-Metro-Stall',
    },
    {
      num: '02',
      featured: false,
      tag: 'TVC & Motion · 2024',
      title: 'COROMANDEL FERTILIZERS',
      desc: 'TVC and social media video production for Coromandel Fertilizers — motion graphics and visual storytelling for a national brand campaign.',
      tags: ['TVC', 'Motion', 'Social Media'],
      link: 'https://www.behance.net/gallery/231833299/Coromandel-Fertilizers-TVC-Social-Media-Videos',
    },
    {
      num: '03',
      featured: false,
      tag: 'Social Media · 2024',
      title: 'GSQUARE POSTS',
      desc: 'Social media post design series for GSquare — bold, on-brand creatives crafted for digital campaigns and audience engagement.',
      tags: ['Social Media', 'Graphic Design'],
      link: 'https://www.behance.net/gallery/231832757/GSQUARE-Social-Media-Post',
    },
    {
      num: '04',
      featured: false,
      tag: 'Motion · 2024',
      title: 'F GEAR PROMO VIDEO',
      desc: 'Motion graphic promotional video for F Gear — dynamic product animation and visual effects for a high-energy brand campaign.',
      tags: ['Motion Graphics', 'After Effects', 'Promo'],
      link: 'https://www.behance.net/gallery/202014289/Motion-Garphic-For-F-Gear-Promotional-Video',
    },
    {
      num: '05',
      featured: false,
      tag: 'Logo Animation · 2023',
      title: 'CRAFTED LOGO ANIMATION',
      desc: 'Smooth, characterful logo animation with careful attention to easing, timing, and brand personality — bringing a static mark to life.',
      tags: ['Logo', 'Animation', 'After Effects'],
      link: 'https://www.behance.net/gallery/187175421/Crafted-Logo-Animation-',
    },
    {
      num: '06',
      featured: false,
      tag: 'Branding · 2024',
      title: 'MIZAJ BRANDING',
      desc: 'In-shop branding and social media post design for Mizaj — a cohesive visual identity covering physical retail and digital presence.',
      tags: ['Identity', 'In-Shop', 'Social'],
      link: 'https://www.behance.net/gallery/231831985/Mizaj-In-Shop-Branding-Social-Media-Post',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="section-header reveal">
        <span className="section-num">04</span>
        <h2 className="section-title">WORK</h2>
        <div className="section-line"></div>
      </div>
      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className={`project-card ${project.featured ? 'featured' : ''} reveal`}>
            <div className="project-num">{project.num}</div>
            <div className="project-tag">{project.tag}</div>
            <div className="project-title">{project.title}</div>
            <div className="project-desc">{project.desc}</div>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="ptag">{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-arrow">↗</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
