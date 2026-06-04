import React, { useState } from 'react';
import './Header.css';

const Header = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const handleLinkClick = (section) => {
    scrollToSection(section);
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="nav-container">
        <img src="/images/logo.png" alt="Logo" className="logo-image" />
        
        {/* Hamburger icon (visible only on mobile) */}
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Navigation links - desktop normal, mobile slides from right */}
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navItems.map(section => (
            <div
              key={section}
              className={`nav-link ${activeSection === section ? 'active' : ''}`}
              onClick={() => handleLinkClick(section)}
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