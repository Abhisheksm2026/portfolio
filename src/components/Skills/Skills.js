import React from 'react';
import './Skills.css';

const Skills = () => {
  const technologies = [
    {
      name: 'Figma',
      role: 'Design',
      icon: '/images/figma-icon.png'
    },
    {
      name: 'Adobe Express',
      role: 'Creative',
      icon: '/images/adobe-express-icon.png'
    },
    {
      name: 'Miro',
      role: 'Collaboration',
      icon: '/images/miro-icon.png'
    },
    {
      name: 'React',
      role: 'Frontend',
      icon: '/images/react-icon.png'
    },
    {
      name: 'MongoDB',
      role: 'Database',
      icon: '/images/mongodb-icon.png'
    },
    {
      name: 'Express.js',
      role: 'Backend',
      icon: '/images/express-icon.png'
    },
    {
      name: 'Node.js',
      role: 'Runtime',
      icon: '/images/nodejs-icon.png'
    },
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technologies I Work With</h2>
      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            <img src={tech.icon} alt={tech.name} className="tech-icon-img" />
            <div className="tech-name">{tech.name}</div>
            <div className="tech-role">{tech.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;