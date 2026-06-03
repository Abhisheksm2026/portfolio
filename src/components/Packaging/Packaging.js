import React from 'react';
import './Packaging.css';

const Packaging = () => {
  return (
    <section id="packaging" className="section">
      <h2 className="section-title">Packaging</h2>
      <div className="packaging-grid">
        <div className="packaging-card">
          <h3>Our Packaging Design</h3>
          <p>
            Our packaging design includes a unique logo, color palette, and typography that stand out on shelves and communicate brand values.
          </p>
        </div>
        <div className="packaging-card">
          <h3>Our Packaging Guidelines</h3>
          <p>
            We follow a consistent set of rules for using our packaging elements, ensuring brand recognition and quality across all products.
          </p>
        </div>
      </div>
      <div className="packaging-showcase">
        <img src="https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=300&fit=crop" alt="Packaging design 1" />
        <img src="https://images.unsplash.com/photo-1601046668428-94ea13437736?w=400&h=300&fit=crop" alt="Packaging design 2" />
      </div>
    </section>
  );
};

export default Packaging;