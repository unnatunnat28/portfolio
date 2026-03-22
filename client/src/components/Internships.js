import React from 'react';
import '../styles/Internships.css';

const Internships = () => {
  const experiences = [
    {
      id: 1,
      section: 'Freelance',
      position: 'Freelance Full Stack Developer',
      company: 'Ayodhya Estate (Client Project)',
      companyLink: 'https://ayodhyaestate.com/',
      duration: 'Jan 2026 – Feb 2026',
      location: 'Remote',
      description: `Built a professional real estate platform for Ayodhya Estates using the MERN stack. Designed a user-friendly interface that allows customers to browse property listings like "Panchi Vihar" with fast-loading images and smooth navigation. Developed an automated inquiry form that instantly sends customers leads to the business email. Integrated a WhatsApp chat feature to make it easier for potential buyers to connect with the sales team, directly increasing user engagement. Optimized the website to show up on Google searches for keywords like "Plots in Ayodhya". Managed the entire deployment process on Render and Netlify, ensuring the site is secure (SSL), mobile-friendly.`,
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Render', 'Netlify'],
      icon: 'fa-code'
    },
    {
      id: 2,
      section: 'Internship',
      position: 'Web Developer Intern',
      company: 'Vanillakart',
      companyLink: 'https://drive.google.com/file/d/1uzH59yibIWz5s00B-NwfNIA09b2QssUr/view',
      duration: '2025',
      location: 'Remote',
      description: `Created hybrid web solutions by building scalable applications with the MERN stack and customizing WordPress CMS platforms to meet diverse client requirements. Streamlined User Experience (UX) by designing dynamic interfaces using React.js and optimizing WordPress themes for responsiveness and speed. Collaborated on backend integration tasks using Node.js while ensuring site stability through rigorous testing and plugin management.`,
      technologies: ['WordPress', 'React.js', 'Node.js', 'MongoDB', 'REST API'],
      icon: 'fa-laptop-code'
    }
  ];

  return (
    <section className="internships" id="internships">
      <p>PROFESSIONAL EXPERIENCE</p>
      <div className="title">
        <h1>Work & Experience</h1>
        <p>Internship and freelance roles from my recent professional journey</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="internships-container">
        {experiences.map((internship) => (
          <div className="internship-card" key={internship.id}>
            <div className="internship-header">
              <div className="company-icon">
                <i className={`fa-solid ${internship.icon}`}></i>
              </div>
              <div className="company-info">
                <p className="experience-type">{internship.section}</p>
                <h3>{internship.position}</h3>
                <p className="company-name">
                  {internship.companyLink ? (
                    <a href={internship.companyLink} target="_blank" rel="noopener noreferrer">{internship.company}</a>
                  ) : (
                    internship.company
                  )}
                </p>
              </div>
            </div>

            <div className="internship-meta">
              <span className="duration">
                <i className="fa-regular fa-calendar"></i> {internship.duration}
              </span>
              <span className="location">
                <i className="fa-solid fa-location-dot"></i> {internship.location}
              </span>
            </div>

            <p className="internship-description">{internship.description}</p>

            <div className="internship-technologies">
              <p className="tech-label">Technologies:</p>
              <div className="tech-tags">
                {internship.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
