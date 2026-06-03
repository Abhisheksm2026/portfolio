import React from 'react';
import './Articles.css';

const Articles = () => {
  // Create an array of image paths (assuming images are in public/images/)
  const images = Array.from({ length: 8 }, (_, i) => `/images/img${i + 1}.png`);

  return (
    <section id="articles" className="section">
      <h2 className="section-title">Featured Writings</h2>
      <div className="articles-grid">
        {images.map((src, index) => (
          <div key={index} className="article-card">
            <img
              src={src}
              alt={`Featured work ${index + 1}`}
              className="article-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;