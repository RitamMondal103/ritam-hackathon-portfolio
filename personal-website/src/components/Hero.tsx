import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">Ritam Mondal</span>
            </h1>
            <p className="hero-subtitle">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="hero-description">
              Passionate about creating beautiful, functional web applications that make a difference. 
              I specialize in modern JavaScript frameworks and love turning ideas into reality through code.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View My Work
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-container">
              <div className="avatar">
                <span className="avatar-text">RM</span>
              </div>
              <div className="avatar-ring"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
