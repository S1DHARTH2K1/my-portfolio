import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay for animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Sidharth Suresh</span>
          </h1>
          <h2 className="hero-subtitle">Aspiring MERN Stack Developer</h2>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#about" className="btn btn-secondary">About Me</a>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div>
          <span className="scroll-arrow">
            <span></span>
            <span></span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
