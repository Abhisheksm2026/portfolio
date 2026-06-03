import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import WorkExperience from './components/WorkExperience/WorkExperience';
import Certifications from './components/Certifications/Certifications';
import Articles from './components/Articles/Articles';
import Contact from './components/Contact/Contact';
import Connect from './components/Connect/Connect';
import ParallaxBackground from './components/ParallaxBackground/ParallaxBackground';
import ThreeBackground from './components/ThreeBackground/ThreeBackground';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'skills', 'work-experience', 'certifications', 'articles', 'contact', 'connect'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="app">
      <ThreeBackground />
      <ParallaxBackground />
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <main className="main-content">
        <Hero scrollToSection={scrollToSection} />
        <Skills />
        <WorkExperience />
        <Certifications />
        <Articles />
        <Contact />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default App;