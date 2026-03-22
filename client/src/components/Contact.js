import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'https://egamanportfolio-backend.onrender.com';
      const response = await axios.post(`${apiUrl}/api/contact`, formData);
      
      if (response.status === 200) {
        setSubmitted(true);
        setFormData({
          user_name: '',
          user_email: '',
          message: ''
        });
        
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <p>CONTACT</p>
      <h1>Get in Touch with Us</h1>
      <div className="contact-content">
        <div className="contact-info slide-in-left">
          <p>I'm always open to discuss exciting projects and new opportunities. Let's collaborate!</p>
          <div className="contact-details">
            <div className="contact-item">
              <i className="fa-solid fa-envelope"></i>
              <span>unnat205@gmail.com</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-phone"></i>
              <span>+91 8053503183</span>
            </div>
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <span>Punjab, India</span>
            </div>
          </div>

          <div className="follow-section">
            <h3 className="follow-title">Follow Me</h3>
            <div className="social-links">
              <a href="https://github.com/unnatunnat28" className="social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/unnat-singh-119b9b2b3/" className="social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://wa.me/918053503183" className="social-link" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form slide-in-right">
          <form onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                <i className="fa-solid fa-check"></i> Message sent successfully!
              </div>
            )}
            {error && (
              <div className="error-message">
                <i className="fa-solid fa-xmark"></i> {error}
              </div>
            )}
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                required
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn-send"
              disabled={loading}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
