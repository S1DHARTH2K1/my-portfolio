import React, { useEffect, useState, useRef } from 'react';
import './About.css';
// Use a default avatar instead of importing an image that might not exist
import profilePicture from '../assets/images/profile-placeholder.jpg';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>About Me</h2>
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <div className="about-image">
            <div className="image-container">
              <img src={profilePicture} alt="Sidharth Suresh" />
            </div>
          </div>
          <div className="about-text">
            <h3>Sidharth Suresh</h3>
            <p className="about-intro">
              I am an aspiring MERN Stack Developer with a passion for creating responsive and user-friendly web applications.
            </p>

            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Location:</span>
                <span className="detail-value">Calicut, Kerala</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">sidharthsuresh.work@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">+91 7510350554</span>
              </div>
            </div>

            <div className="education">
              <h4>Education</h4>
              <div className="education-item">
                <p className="degree">B.Tech in Computer Science and Engineering</p>
                <p className="institution">Government Engineering College Wayanad</p>
                <p className="date">May 2024</p>
                <p className="gpa">GPA: 6.8 CGPA</p>
              </div>
            </div>

            <div className="internships">
              <h4>Internships</h4>
              <div className="internship-item">
                <p className="position">Game Development Intern</p>
                <p className="company">BigBoy, Kakkanad</p>
                <p className="date">November 2023</p>
              </div>
              <div className="internship-item">
                <p className="position">MERN Stack Developer Intern</p>
                <p className="company">Idatalytics, Kakkanad</p>
                <p className="date">October 2024 – February 2025</p>
              </div>
            </div>

            <div className="hobbies">
              <h4>Hobbies</h4>
              <ul className="hobbies-list">
                <li>Chess</li>
                <li>E-Games</li>
                <li>Comics</li>
                <li>Music</li>
                <li>Travel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
