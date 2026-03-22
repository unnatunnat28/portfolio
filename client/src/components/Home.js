import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const words = ["Full Stack Developer", "MERN Stack Developer", "Problem Solver"];
    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="home" id="home">
      <p className="home-p">
        <span className="home-s">●</span> B.Tech 3rd Year Student
      </p>
      <div className="home-container">
        <div className="home-section">
          <div className="info-home">
            <h1>Hi, I'm Unnat Singh</h1>
            <h3>{displayText}|</h3>
            <div className="info-p">
              <p>I'm a 3rd-year Computer Science Engineering student specializing in full-stack development, data structures, and building scalable web applications using the MERN stack.</p>
              <p>I focus on creating user-friendly digital solutions, from responsive frontends to robust backends, with a passion for problem-solving and clean code.</p>
            </div>
            <div className="btnn">
              <button className="btn-home1" onClick={handleContactClick}>
                <i className="fa-solid fa-arrow-right"></i> Contact Me
              </button>
              <button className="btn-home2">
                <a href="/assets/30JanUpdated.pdf" download="30JanUpdated.pdf">
                  <i className="fa-solid fa-download"></i> Download CV
                </a>
              </button>
            </div>
            <div className="hhr">
              <hr />
            </div>
            <div className="follow">
              <p className="followw">Follow me:</p>
              <ul>
                <li><a href="https://github.com/unnatunnat28" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/unnat-singh-119b9b2b3/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="imghov1">
          <img src="/images/profile.png" alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Home;
