import React from 'react';
import './Hero.css';

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className="hero-visual">
          <div className="image-backdrop">
            <div className="glow-bg"></div>
            <div className="profile-card">
              <img src="/images/profile.jpg" alt="Abhishek Malangaonkar" />
            </div>
          </div>
        </div>
        <div className="hero-text">
          <h1>
            <span className="greeting">Hey. I'm</span><br />
            Abhishek Sunil Malangaonkar
          </h1>
          <div className="designation">A UI/UX & Brand DESIGNER</div>
          <p className="hero-description">
            I am a globally certified UI/UX designer with over 5 years of experience crafting user‑centric digital products. My expertise spans the entire design process – from user research, information architecture, and wireframing to high‑fidelity prototyping, usability testing, and iterative design. I thrive on transforming complex requirements into intuitive, visually engaging interfaces that deliver measurable improvements in usability and user satisfaction. Proficient in Figma, FigJam, HTML, CSS, Reactjs, Tailwind CSS, Angular (Material UI), I stay at the forefront of design trends and front‑end technologies. Whether it’s a mobile app, a web platform, or a complete design system, I bring a blend of analytical thinking and creative passion to every project. Let’s build experiences that users love.
          </p>
          <div className="stats-container">
            <div className="stat">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
            <div className="stat">
              <span className="stat-number">99%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Clients Worldwide</span>
            </div>
          </div>
          <button className="cta-button" onClick={() => scrollToSection('work-experience')}>
            Know More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;