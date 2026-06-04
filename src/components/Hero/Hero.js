import React from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-image">
        <img
          src="/images/profile.jpg"
          alt="Abhishek Malangaonkar"
        />
      </div>
      <div className="hero-content">
        <h1>Abhishek Sunil Malangaonkar</h1>
        <div className="designation">Global Certified UX/UI Designer</div>
        <div className="hero-badge">✦ 5+ years of experience ✦</div>
        <p className="hero-description">
          Experienced UI/UX Designer with 5+ years of expertise in Figma, FigJam, user research, 
          information architecture, wireframing, prototyping, and usability testing. Skilled in 
          creating visually appealing, user-friendly interfaces and delivering iterative design 
          solutions that enhance usability and improve digital experiences.
        </p>
        <button className="cta-button" onClick={() => scrollToSection('work-experience')}>
          View My Work →
        </button>
      </div>
    </section>
  );
};

export default Hero;