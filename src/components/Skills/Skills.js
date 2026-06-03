import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    'User Research', 'Qualitative Analysis', 'User Personas', 'User Journey Mapping',
    'Information Architecture', 'Paper Sketching', 'High Fidelity Prototype',
    'Usability Testing', 'A/B & Card Sorting', 'User Interviews', 'Prototyping & Iteration',
    'Design Systems', 'Competitive Analysis', 'HTML, CSS', 'Angular 18 (Material UI)'
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill-tag">{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;