import React from 'react';
import './ParallaxBackground.css';

const ParallaxBackground = () => {
  return (
    <div className="parallax-bg">
      <div className="circle" style={{ width: '300px', height: '300px', top: '10%', left: '-100px', animationDelay: '0s' }}></div>
      <div className="circle" style={{ width: '200px', height: '200px', bottom: '20%', right: '-50px', animationDelay: '5s' }}></div>
      <div className="circle" style={{ width: '150px', height: '150px', top: '50%', right: '20%', animationDelay: '2s' }}></div>
    </div>
  );
};

export default ParallaxBackground;