import React from 'react';
import '../styles/Certificates.css';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Java Programming',
      issuer: 'iamNeo – Lovely Professional University',
      date: 'May 2025',
      icon: 'fa-coffee',
      credentialUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19oSPI2oCarZ9F%2ByLRLzM4TyRykwpmM%2B8w%3D',
      imageUrl: '/images/java-certificate.jpg'
    },
    {
      id: 2,
      title: 'Data Structures and Algorithms',
      issuer: 'iamNeo – Lovely Professional University',
      date: 'May 2025',
      icon: 'fa-sitemap',
      credentialUrl: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX18%2FWTqsrcaiKnusQQEuplXvPQGrsPzMVHg%3D',
      imageUrl: '/images/dsa.jpg'
    },
    {
      id: 3,
      title: 'Software Engineering: Implementation and Testing',
      issuer: 'Coursera',
      date: 'May 2024',
      icon: 'fa-cogs',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/4SDZP794RJ2B/',
      imageUrl: '/images/coursera.jpg'
    },
    {
      id: 4,
      title: 'Responsive Web Development',
      issuer: 'FreeCodeCamp',
      date: 'Oct 2023',
      icon: 'fa-globe',
      credentialUrl: 'https://www.freecodecamp.org/certification/unnat00/responsive-web-design',
      imageUrl: '/images/fourth.jpg'
    }
  ];

    const handleCertificateClick = (url) => {
      if (url !== '#') {
        window.open(url, '_blank');
      }
    };

  return (
    <section className="certificates" id="certificates">
      <p>ACHIEVEMENTS</p>
      <div className="title">
        <h1>Certifications & Training</h1>
        <p>Professional certificates and training programs</p>
      </div>
      <div className="hrrr">
        <hr />
      </div>
      <div className="certificates-container">
        {certificates.map((cert) => (
            <div 
              className="certificate-card" 
              key={cert.id}
              onClick={() => handleCertificateClick(cert.credentialUrl)}
              style={{ cursor: cert.credentialUrl !== '#' ? 'pointer' : 'default' }}
            >
              <div className="cert-image-container">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} certificate`}
                  className="cert-image"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement.classList.add('no-image');
                  }}
                />
                <div className="cert-icon">
                  <i className={`fa-brands ${cert.icon}`}></i>
                </div>
              </div>
              <div className="cert-details">
              <h3>{cert.title}</h3>
              <p className="issuer">{cert.issuer}</p>
              <p className="date">
                <i className="fa-regular fa-calendar"></i> {cert.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
