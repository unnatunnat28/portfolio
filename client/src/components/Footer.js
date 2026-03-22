import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Unnat Singh</h2>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#services">Skills</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-social">
          <a href="https://github.com/unnatunnat28" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/unnat-singh-119b9b2b3/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://wa.me/918053503183" target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
        <p className="footer-copy">&copy; 2026 Unnat Singh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
