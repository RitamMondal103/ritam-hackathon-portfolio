import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment processing, and admin dashboard.',
      image: '🛒',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      features: ['User authentication', 'Shopping cart', 'Payment integration', 'Admin panel'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      image: '📋',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Socket.io'],
      features: ['Real-time collaboration', 'Drag & drop', 'Team workspaces', 'Notifications'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with detailed forecasts, interactive maps, and location-based services.',
      image: '🌤️',
      technologies: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      features: ['5-day forecast', 'Interactive maps', 'Location search', 'Weather alerts'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
      image: '📊',
      technologies: ['Next.js', 'Python', 'Django', 'D3.js', 'Redis'],
      features: ['Data visualization', 'Custom reports', 'Export functionality', 'Real-time data'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and optimized performance.',
      image: '🎨',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      features: ['Responsive design', 'Smooth animations', 'SEO optimized', 'Fast loading'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with end-to-end encryption, file sharing, and video calling.',
      image: '💬',
      technologies: ['React Native', 'Firebase', 'WebRTC', 'Redux'],
      features: ['End-to-end encryption', 'File sharing', 'Video calls', 'Push notifications'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <div className="cta-card">
            <h3>Interested in collaborating?</h3>
            <p>
              I'm always open to discussing new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
