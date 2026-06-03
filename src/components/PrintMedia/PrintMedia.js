import React from 'react';
import './PrintMedia.css';

const PrintMedia = () => {
  const printItems = ['Magazines', 'Flyers', 'Posters', 'Brochures'];

  return (
    <section id="print-media" className="section">
      <h2 className="section-title">Print Media</h2>
      <div className="print-content">
        <div className="print-presence">
          <h3>Our Print Media Presence</h3>
          <ul className="print-list">
            {printItems.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="print-goals">
          <h3>Our Print Media Goals</h3>
          <p>Increasing readership and visibility through high‑quality printed materials.</p>
        </div>
      </div>
    </section>
  );
};

export default PrintMedia;