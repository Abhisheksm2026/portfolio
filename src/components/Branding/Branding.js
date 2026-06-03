import React from 'react';
import './Branding.css';

const Branding = () => {
  return (
    <section id="branding" className="section">
      <h2 className="section-title">Branding</h2>
      <div className="branding-container">
        <div className="branding-card">
          <h3>Our Vision</h3>
          <p>
            Our vision is to create a brand that reflects our values and resonates with our target audience. We strive to be a trusted partner in the industry, delivering high-quality products and services that meet the needs of our clients.
          </p>
        </div>
        <div className="branding-card">
          <h3>Our Values</h3>
          <ul className="values-list">
            <li><strong>Innovation</strong> – Always looking for new ways to improve.</li>
            <li><strong>Excellence</strong> – Striving for the highest quality.</li>
            <li><strong>Customer Focus</strong> – Putting clients first.</li>
            <li><strong>Teamwork</strong> – Stronger together.</li>
          </ul>
        </div>
        <div className="branding-card">
          <h3>Our Mission</h3>
          <p>
            Our mission is to be the leading provider of high-quality graphic design services in the industry. We are committed to excellence, innovation, and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Branding;