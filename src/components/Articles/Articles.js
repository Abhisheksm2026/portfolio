import React, { useState, useEffect } from 'react';
import './Articles.css';

const Articles = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // 11 images (img1.png to img11.png)
  const images = Array.from({ length: 11 }, (_, i) => `/images/img${i + 1}.png`);

  const openModal = (src) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden'; // prevent background scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Close modal with Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="articles" className="section">
      <h2 className="section-title">Featured Writings</h2>
      <div className="articles-grid">
        {images.map((src, index) => (
          <div key={index} className="article-card" onClick={() => openModal(src)}>
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

      {/* Full‑screen modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Full view" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Articles;