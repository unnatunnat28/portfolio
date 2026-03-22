import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Java', 'C++', 'PHP', 'JavaScript']
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'React', 'Node.js', 'Express']
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'GitHub']
    },
    {
      category: 'Core CS Fundamentals',
      skills: ['OOP Concepts', 'DBMS', 'SQL', 'Data Structures and Algorithms']
    },
    {
      category: 'Soft Skills',
      skills: ['Analytical Thinking', 'Adaptability', 'Active Listening', 'Detail-Oriented']
    }
  ];

  return (
    <section className="services" id="services">
      <p>TECHNICAL PROFICIENCY</p>
      <div className="title">
        <h1>Skills</h1>
        <p>Languages, frameworks, tools, and core competencies</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="services-container">
        {skillsData.map((skillGroup, index) => (
          <div className="skill-group" key={index}>
            <h3>{skillGroup.category}</h3>
            <div className="skills-list">
              {skillGroup.skills.map((skill, idx) => (
                <span key={idx} className="skill-badge">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
