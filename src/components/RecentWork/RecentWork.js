import React from 'react';
import './RecentWork.css';

const RecentWork = () => {
  const works = [
    {
      id: 1,
      title: 'Brand Identity Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      behanceLink: 'https://behance.net/gallery/123456/Brand-Identity'
    },
    {
      id: 2,
      title: 'Mobile App UI/UX',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      behanceLink: 'https://behance.net/gallery/123457/Mobile-App'
    },
    {
      id: 3,
      title: 'Web Dashboard',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      behanceLink: 'https://behance.net/gallery/123458/Web-Dashboard'
    }
  ];

  return (
    <section id="work" className="section">
      <h2 className="section-title">Recent Work</h2>
      <div className="work-grid">
        {works.map(work => (
          <div key={work.id} className="work-card">
            <img src={work.image} alt={work.title} className="work-image" />
            <div className="work-overlay">
              <h3 className="work-title">{work.title}</h3>
              <a
                href={work.behanceLink}
                target="_blank"
                rel="noopener noreferrer"
                className="work-arrow"
              >
                → View on Behance
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentWork;