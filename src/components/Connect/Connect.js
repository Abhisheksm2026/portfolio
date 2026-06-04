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
    },
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/', 
      brandClass: 'instagram',
      icon: <img src="/images/instagram-icon.jpg" alt="Instagram" className="connect-image-icon" />
    },
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/AbhiShek%20Malangaonkar', 
      brandClass: 'facebook',
      icon: <img src="/images/facebook-icon.jpg" alt="Facebook" className="connect-image-icon" />
    },
    { 
      name: 'Twitter', 
      url: 'https://x.com/AbhishekMa43791', 
      brandClass: 'twitter',
      icon: <img src="/images/twitter-icon.jpg" alt="Twitter" className="connect-image-icon" />
    },
    { 
      name: 'Dribbble', 
      url: 'https://dribbble.com/Abhisheksm8888', 
      brandClass: 'dribbble',
      icon: <img src="/images/dribbble-icon.jpg" alt="Dribbble" className="connect-image-icon" />
    },
    { 
      name: 'Medium', 
      url: 'https://medium.com/@amalangaonkar75', 
      brandClass: 'medium',
      icon: <img src="/images/medium-icon.jpg" alt="Medium" className="connect-image-icon" />
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/AbhishekSMalangaonkar', 
      brandClass: 'github',
      icon: <img src="/images/github-icon.jpg" alt="GitHub" className="connect-image-icon" />
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