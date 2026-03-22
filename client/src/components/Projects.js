import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Pacman Game Clone',
      description: 'Architectured a fully functional 2D arcade game using Java and Swing, implementing core mechanics like maze navigation, score tracking, and lives management. Engineered dynamic collision detection algorithms and ghost AI movement logic using 2D array grid manipulation to track game state. Applied Object-Oriented Programming (OOP) principles to structure game entities (Player, Enemy, Map), ensuring code modularity and maintainability.',
      tags: ['Java', 'Swing', 'AWT', 'OOP', '2D Graphics Algorithms', 'Git'],
      link: 'https://github.com/unnatunnat28',
      demo: 'https://github.com/unnatunnat28',
      bg: '/images/pacman.svg'
    },
    {
      id: 2,
      title: 'Ayodhya Estate Platform',
      description: 'Built a professional real estate platform for Ayodhya Estates using the MERN stack. Designed a user-friendly interface that allows customers to browse property listings like "Panchi Vihar" with fast-loading images and smooth navigation. Developed an automated inquiry form that instantly sends customers leads to the business email. Integrated a WhatsApp chat feature to make it easier for potential buyers to connect with the sales team, directly increasing user engagement. Optimized the website to show up on Google searches for keywords like "Plots in Ayodhya".',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Render', 'Netlify'],
      link: 'https://github.com/unnatunnat28/ayodhya-estate',
      demo: 'https://ayodhyaestate.com/',
      bg: '/images/realestate.svg'
    }
  ];

  return (
    <section className="projects" id="project">
      <p>MY WORK</p>
      <div className="title">
        <h1>Recent Projects</h1>
        <p>Showcase of my recent work and accomplishments</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div
              className="project-bg"
              style={{ backgroundImage: `url(${project.bg})` }}
            />
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-links">
                <a href={project.link} className="project-link" title="View Code">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href={project.demo} className="project-link" title="Live Demo">
                  <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
