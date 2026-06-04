import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    // Previous certifications
    'UI/UX Design Advance Global Certification',
    'Certified in Google Analytics',
    'Frontend Development',
    'Masters ChatGPT',
    // New certifications
    'AI Fluency: Framework & Foundations (Anthropic)',
    'Claude Code in Action',
    'Introduction to Claude Cowork (Anthropic)',
    'Claude Code 101',
    'Claude 101 (Anthropic)'
  ];

  return (
    <section id="certifications" className="section">
      <h2 className="section-title">Certifications</h2>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-item">
            <span className="cert-icon">🏅</span>
            <span className="cert-text">{cert}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;