import React from 'react';

const Projects: React.FC = () => {
  const projectsData = [
    {
      num: '01',
      featured: true,
      section: 'Featured',
      tag: 'TVC & Motion · 2024',
      title: 'COROMANDEL FERTILIZERS',
      image: '/placeholder-project.png',
      desc: 'Cinematic TVC campaign with dynamic motion graphics, agricultural visualization, and brand storytelling that increased viewer engagement by 40%.',
      tags: ['TVC', 'Motion Graphics', 'Brand Film', 'After Effects'],
      link: 'https://www.behance.net/gallery/231833299/Coromandel-Fertilizers-TVC-Social-Media-Videos',
    },
    {
      num: '02',
      featured: false,
      section: 'Motion',
      tag: 'Product Animation · 2024',
      image: '/placeholder-project.png',
      title: 'F GEAR PROMO VIDEO',
      desc: 'High-energy product animation showcasing gear mechanisms with fluid motion design and dynamic camera work for maximum impact.',
      tags: ['Product Animation', 'Motion Graphics', '3D Elements'],
      link: 'https://www.behance.net/gallery/202014289/Motion-Garphic-For-F-Gear-Promotional-Video',
    },
    {
      num: '03',
      featured: false,
      section: 'Animation',
      tag: 'Logo Animation · 2023',
      image: '/placeholder-project.png',
      title: 'CRAFTED LOGO ANIMATION',
      desc: 'Sophisticated logo reveal with custom easing, particle effects, and brand personality animation that brought the identity to life.',
      tags: ['Logo Animation', 'After Effects', 'Brand Identity'],
      link: 'https://www.behance.net/gallery/187175421/Crafted-Logo-Animation-',
    },
    {
      num: '04',
      featured: false,
      section: 'VFX',
      tag: 'Visual Effects · 2024',
      image: '/placeholder-project.png',
      title: 'CINEMATIC VFX SEQUENCE',
      desc: 'Complex visual effects sequence combining motion tracking, particle systems, and compositing for a cinematic brand experience.',
      tags: ['VFX', 'Compositing', 'Motion Tracking', 'Cinema 4D'],
      link: '#',
    },
    {
      num: '05',
      featured: false,
      section: 'Social',
      tag: 'Social Media · 2024',
      image: '/placeholder-project.png',
      title: 'BRAND STORYTELLING SERIES',
      desc: 'Animated social media series with character animation, kinetic typography, and engaging motion graphics for brand awareness.',
      tags: ['Social Media', 'Character Animation', 'Typography'],
      link: '#',
    },
    {
      num: '06',
      featured: false,
      section: '3D',
      tag: '3D Animation · 2024',
      image: '/placeholder-project.png',
      title: 'PRODUCT VISUALIZATION',
      desc: 'Immersive 3D product animation with lighting, materials, and camera animation for e-commerce and marketing campaigns.',
      tags: ['3D Animation', 'Product Viz', 'Rendering', 'Motion Design'],
      link: '#',
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
            <div className="project-image">
              <img
                src={project.image || 'https://via.placeholder.com/700x450?text=No+Image'}
                alt={project.title}
                loading="lazy"
              />
            </div>
            <div className="project-section">{project.section || 'General'}</div>
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
