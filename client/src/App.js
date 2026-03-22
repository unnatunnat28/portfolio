import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Internships from './components/Internships';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollEffects from './components/ScrollEffects';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Create back to top button
    const backToTop = document.createElement('div');
    backToTop.innerHTML = '<i class="fa-solid fa-chevron-up"></i>';
    backToTop.id = 'back-to-top';
    document.body.appendChild(backToTop);

    backToTop.style.cssText = `
      position: fixed;
      bottom: 40px;
      right: 40px;
      background: #474af0;
      color: white;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 1000;
      transition: transform 0.3s ease;
    `;

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    backToTop.addEventListener('mouseover', () => {
      backToTop.style.transform = 'scale(1.2)';
    });

    backToTop.addEventListener('mouseout', () => {
      backToTop.style.transform = 'scale(1)';
    });

    return () => {
      if (backToTop.parentElement) {
        backToTop.parentElement.removeChild(backToTop);
      }
    };
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Home />
      <About />
      <Services />
      <Internships />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollEffects />
    </div>
  );
}

export default App;
