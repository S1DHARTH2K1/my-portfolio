import React, { useEffect, useState, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML', category: 'technical' },
    { name: 'CSS', category: 'technical' },
    { name: 'JavaScript', category: 'technical' },
    { name: 'React.js', category: 'technical' },
    { name: 'Node.js', category: 'technical' },
    { name: 'Express.js', category: 'technical' },
    { name: 'MongoDB', category: 'technical' },
    { name: 'C', category: 'technical' },
    { name: 'C#', category: 'technical' },
    { name: 'Communication', category: 'soft' },
    { name: 'Problem Solving', category: 'soft' },
    { name: 'Team Management', category: 'soft' },
  ];

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

  const technicalSkills = skills.filter(skill => skill.category === 'technical');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>My Skills</h2>

        <div className={`skills-container ${isVisible ? 'visible' : ''}`}>
          <div className="skills-category">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <div
                  className="skill-item"
                  key={index}
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-category">
            <h3>Soft Skills</h3>
            <div className="skills-grid">
              {softSkills.map((skill, index) => (
                <div
                  className="skill-item"
                  key={index}
                  style={{ animationDelay: `${0.1 * (index + technicalSkills.length)}s` }}
                >
                  <h4>{skill.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
