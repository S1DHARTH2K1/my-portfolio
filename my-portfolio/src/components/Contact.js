import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Map the form field names to our state properties
    const fieldMap = {
      'user_name': 'name',
      'user_email': 'email',
      'message': 'message'
    };

    const stateField = fieldMap[name] || name;

    setFormData(prevData => ({
      ...prevData,
      [stateField]: value
    }));
  };

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // EmailJS service configuration
    const serviceID = 'service_portfolio'; // You'll need to create this service ID in EmailJS
    const templateID = 'template_contact'; // You'll need to create this template ID in EmailJS
    const userID = 'user_yourUserID'; // Your EmailJS User ID

    // Preparing form data for email submission

    // Send the email using EmailJS
    emailjs.sendForm(serviceID, templateID, form.current, userID)
      .then(() => {
        setFormSubmitted(true);
        setLoading(false);

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setFormSubmitted(false);
        }, 3000);
      })
      .catch(() => {
        setError('Failed to send message. Please try again later.');
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Get In Touch</h2>

        <div className={`contact-container ${isVisible ? 'visible' : ''}`}>
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>

            <div className="info-item">
              <i className="info-icon location-icon"></i>
              <div>
                <h4>Location</h4>
                <p>Calicut, Kerala, India</p>
              </div>
            </div>

            <div className="info-item">
              <i className="info-icon email-icon"></i>
              <div>
                <h4>Email</h4>
                <p>sidharthsuresh.work@gmail.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="info-icon phone-icon"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 7510350554</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/S1DHARTH2K1" target="_blank" rel="noopener noreferrer" className="social-link github">
                <i className="social-icon github-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/sidharth-suresh-68665a337/" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <i className="social-icon linkedin-icon"></i>
              </a>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" ref={form} onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="user_name" // Changed to match EmailJS template
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="user_email" // Changed to match EmailJS template
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && <span className="btn-icon">→</span>}
              </button>

              {formSubmitted && (
                <div className="success-message">
                  <p>Your message has been sent successfully!</p>
                </div>
              )}

              {error && (
                <div className="error-message">
                  <p>{error}</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
