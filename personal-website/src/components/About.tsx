import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Learn more about who I am and what drives my passion for development
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              Hello! I'm Ritam Mondal, a passionate full-stack developer with a keen eye for design 
              and a love for creating exceptional user experiences.
            </p>
            <p>
              My journey in web development started several years ago, and since then, I've been 
              dedicated to mastering modern technologies and best practices. I believe in writing 
              clean, maintainable code and building applications that not only look great but also 
              solve real-world problems.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing my knowledge with the developer community. I'm 
              always eager to take on new challenges and collaborate on exciting projects.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Fast Learner</h4>
                  <p>Quickly adapt to new technologies and frameworks</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">💡</span>
                <div>
                  <h4>Problem Solver</h4>
                  <p>Enjoy tackling complex challenges and finding elegant solutions</p>
                </div>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🤝</span>
                <div>
                  <h4>Team Player</h4>
                  <p>Collaborate effectively and communicate clearly</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-details">
            <div className="detail-card">
              <h3>Personal Details</h3>
              <div className="detail-list">
                <div className="detail-item">
                  <span className="detail-label">Name:</span>
                  <span className="detail-value">Ritam Mondal</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Location:</span>
                  <span className="detail-value">India</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Email:</span>
                  <span className="detail-value">ritam@example.com</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Status:</span>
                  <span className="detail-value">Available for work</span>
                </div>
              </div>
            </div>
            
            <div className="detail-card">
              <h3>Interests</h3>
              <div className="interests-grid">
                <span className="interest-tag">Web Development</span>
                <span className="interest-tag">UI/UX Design</span>
                <span className="interest-tag">Machine Learning</span>
                <span className="interest-tag">Open Source</span>
                <span className="interest-tag">Cloud Computing</span>
                <span className="interest-tag">Mobile Apps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
