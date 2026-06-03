import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <p>
          I'm a globally certified UI/UX designer with 5+ years of experience in creating
          user‑centered digital experiences. My expertise spans user research, wireframing,
          prototyping, and usability testing – always with the goal of making complex tasks
          simple and delightful.
        </p>
        <br />
        <p>
          I believe great design is invisible; it works so well that users never notice the
          effort behind it. I’m passionate about bridging the gap between business goals and
          user needs, delivering solutions that are both aesthetically pleasing and functionally
          robust.
        </p>
        <br />
        <p>
          Outside of design, I love contributing to open‑source projects, mentoring aspiring
          designers, and staying ahead of the latest trends in AI and front‑end technologies.
          Let’s build something meaningful together.
        </p>
      </div>
    </section>
  );
};

export default About;