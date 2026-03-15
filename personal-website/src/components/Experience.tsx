import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      location: 'Remote',
      description: [
        'Developed and maintained responsive web applications using React and TypeScript',
        'Implemented RESTful APIs and integrated with third-party services',
        'Collaborated with cross-functional teams to deliver high-quality software solutions',
        'Optimized application performance resulting in 40% faster load times'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2021 - 2022',
      location: 'San Francisco, CA',
      description: [
        'Built modern, responsive user interfaces for various client projects',
        'Worked closely with UX designers to implement pixel-perfect designs',
        'Developed reusable component libraries and design systems',
        'Participated in code reviews and mentored junior developers'
      ],
      technologies: ['Vue.js', 'JavaScript', 'SASS', 'Webpack', 'Git']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      period: '2020 - 2021',
      location: 'New York, NY',
      description: [
        'Assisted in the development of company\'s flagship web application',
        'Implemented new features and bug fixes based on user feedback',
        'Collaborated with senior developers to learn best practices',
        'Contributed to the migration from legacy codebase to modern stack'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'React', 'Firebase', 'Tailwind CSS']
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            My professional journey and the roles I've taken on
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-content">
                <div className="experience-header">
                  <div className="experience-info">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    <span className="experience-period">{exp.period}</span>
                    <span className="experience-location">{exp.location}</span>
                  </div>
                </div>
                
                <ul className="experience-description">
                  {exp.description.map((desc, descIndex) => (
                    <li key={descIndex}>{desc}</li>
                  ))}
                </ul>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="experience-summary">
          <div className="summary-card">
            <h3>Professional Growth</h3>
            <p>
              Throughout my career, I've had the opportunity to work on diverse projects 
              and collaborate with talented teams. Each role has helped me develop new 
              skills and deepen my understanding of web development best practices.
            </p>
            <div className="growth-stats">
              <div className="growth-item">
                <span className="growth-icon">📈</span>
                <div>
                  <h4>Continuous Learning</h4>
                  <p>Always exploring new technologies and frameworks</p>
                </div>
              </div>
              <div className="growth-item">
                <span className="growth-icon">🎯</span>
                <div>
                  <h4>Goal Oriented</h4>
                  <p>Focused on delivering impactful solutions</p>
                </div>
              </div>
              <div className="growth-item">
                <span className="growth-icon">🚀</span>
                <div>
                  <h4>Innovation Driven</h4>
                  <p>Passionate about creating cutting-edge experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
