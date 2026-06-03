import React from 'react';
import './Connect.css';

const Connect = () => {
  const platforms = [
    { 
      name: 'Behance', 
      url: 'https://www.behance.net/AbhishekMalangaonkar', 
      brandClass: 'behance',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M9.5 10.5c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm8.5 3h-5c0 1.5 1.5 2.5 3.5 2.5s2.5-.5 3-1.5h2.5c-1 2-2.5 3-5.5 3s-5.5-2-5.5-5 2-5 5.5-5 5 2 5 5c0 .5 0 1-.5 1zm-5-6.5h-6v2h6v-2zM0 0v24h24V0H0zm6.5 12c-1.5 0-2.5-1-2.5-2.5S5 7 6.5 7s2.5 1 2.5 2.5-1 2.5-2.5 2.5zm7 4c-1.5 0-2.5-1-2.5-2.5s1-2.5 2.5-2.5 2.5 1 2.5 2.5-1 2.5-2.5 2.5z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/abhishek-malangaonkar-a87206109/', 
      brandClass: 'linkedin',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.204 0 22.225 0z"/>
        </svg>
      )
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