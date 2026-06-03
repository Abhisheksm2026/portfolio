import React from 'react';
import './LogoFolio.css';

const LogoFolio = () => {
  const logos = [
    { id: 1, img: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=300&h=200&fit=crop', title: 'Abstract Bird' },
    { id: 2, img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=300&h=200&fit=crop', title: 'Geometric Fox' },
    { id: 3, img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=300&h=200&fit=crop', title: 'Minimal Mountain' },
    { id: 4, img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop', title: 'Vintage Badge' },
  ];

  return (
    <section id="logo-folio" className="section">
      <h2 className="section-title">Logo Folio</h2>
      <p className="logo-folio-intro">
        My logofolio highlights custom logos I designed to align with clients' visions.
      </p>
      <div className="logo-grid">
        {logos.map(logo => (
          <div key={logo.id} className="logo-card">
            <img src={logo.img} alt={logo.title} className="logo-img" />
            <p className="logo-title">{logo.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoFolio;