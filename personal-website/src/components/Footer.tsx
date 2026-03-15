import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Social',
      links: [
        { label: 'GitHub', href: 'https://github.com/ritammondal' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/ritammondal' },
        { label: 'Twitter', href: 'https://twitter.com/ritammondal' },
        { label: 'Instagram', href: 'https://instagram.com/ritammondal' }
      ]
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">
              <span className="text-gradient">Ritam Mondal</span>
            </h3>
            <p className="footer-description">
              Full Stack Developer & UI/UX Enthusiast
            </p>
            <p className="footer-text">
              Building beautiful, functional web applications that make a difference.
            </p>
          </div>

          <div className="footer-links">
            {footerLinks.map((section, index) => (
              <div key={index} className="link-section">
                <h4 className="link-title">{section.title}</h4>
                <ul className="link-list">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="footer-link"
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Ritam Mondal. All rights reserved.
            </p>
            <p className="made-with">
              Made with <span className="heart">❤️</span> and <span className="coffee">☕</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
