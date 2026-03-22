import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <p>ABOUT ME</p>
      <div className="title">
        <h1>Building Meaningful</h1>
        <h1>Digital Experiences</h1>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="about-container">
        <div className="info-about">
          <div className="about-info">
            <p>
              I'm a dedicated full-stack developer passionate about creating modern, responsive, and functional web applications using the MERN stack.
              <br />My journey began with curiosity for how systems work, evolving into a strong foundation in software engineering, data structures, and full-stack development.
            </p>
            <p>
              I enjoy building scalable applications, exploring new technologies, and solving real-world problems through clean code, efficient algorithms, and meaningful design.
            </p>
          </div>
          <h2>What Drives Me</h2>
          <div className="card">
            <div className="c1">
              <h3><i className="fa-solid fa-code"></i> Core Skills</h3>
              <p>HTML, CSS, Tailwind CSS, React.js, Node.js, Express.js, MongoDB, MySQL, Java, C++, PHP, JavaScript (ES6+), Git, GitHub</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-graduation-cap"></i> Education</h3>
              <p>B.Tech in Computer Science Engineering, CGPA: 7.1, Lovely Professional University</p>
            </div>
            <div className="c1">
              <h3><i className="fa-solid fa-folder-open"></i> Projects</h3>
              <p>Developed projects including a Pacman game clone and a real estate platform</p>
            </div>
          </div>
        </div>
        <div className="imghov">
          <img src="/images/About.jpg" alt="About" />
        </div>
      </div>
    </section>
  );
};

export default About;
