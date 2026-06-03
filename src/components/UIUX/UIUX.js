import React from 'react';
import './UIUX.css';

const UIUX = () => {
  return (
    <section id="ui-ux" className="section">
      <h2 className="section-title">UI / UX</h2>
      <div className="uiux-content">
        <div className="uiux-card">
          <h3>Our UI UX Design</h3>
          <p>
            Our UI/UX design includes a unique logo, color palette, and typography tailored to digital products. We focus on intuitive navigation and delightful micro‑interactions.
          </p>
        </div>
        <div className="uiux-card">
          <h3>Our UI UX Goals</h3>
          <p>
            Increasing user engagement and satisfaction through user‑centered design, research‑driven decisions, and continuous usability testing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UIUX;