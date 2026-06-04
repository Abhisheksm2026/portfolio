import React from 'react';
import './Connect.css';

const Connect = () => {
  const platforms = [
    { 
      name: 'Behance', 
      url: 'https://www.behance.net/AbhishekMalangaonkar', 
      brandClass: 'behance',
      icon: <img src="/images/behance-icon.jpg" alt="Behance" className="connect-image-icon" />
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/abhishek-malangaonkar-a87206109/', 
      brandClass: 'linkedin',
      icon: <img src="/images/linkedin-icon.jpg" alt="LinkedIn" className="connect-image-icon" />
    }
  ];

  return (
    <section id="connect" className="section">
      <h2 className="section-title">Connect With Me</h2>
      <div className="connect-links">
        {platforms.map(platform => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`connect-card connect-${platform.brandClass}`}
          >
            <span className="connect-icon">{platform.icon}</span>
            <span className="connect-text">{platform.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Connect;