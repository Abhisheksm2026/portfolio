import React from 'react';
import './Header.css';

const Header = ({ activeSection, scrollToSection }) => {
  const navItems = [
    'home',
    'skills',
    'work-experience',
    'certifications',
    'contact',
    'connect'
  ];

  const formatName = (name) => {
    if (name === 'home') return 'Home';
    if (name === 'work-experience') return 'Experience';
    return name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <header className="header">
      <div className="nav-container">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        <div className="nav-links">
          {navItems.map(section => (
            <div
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {formatName(section)}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;