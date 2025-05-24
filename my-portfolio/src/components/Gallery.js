import React, { useEffect, useState, useRef } from 'react';
import './Gallery.css';
import certificate1 from '../assets/images/certificate1.jpg';
import certificate2 from '../assets/images/certificate2.jpg';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);

  const certificates = [
    {
      id: 1,
      title: 'MERN Stack Development Experience Certificate',
      image: certificate1,
      description: 'Certification for completing MERN Stack Development internship at Idatalytics, Kakkanad'
    },
    {
      id: 2,
      title: 'MERN Stack Development Course Certification',
      image: certificate2,
      description: 'Certification for completing MERN Stack Development course at Idatalytics, Kakkanad'
    }
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

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="gallery-section" ref={sectionRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Certificates</h2>

        <div className={`gallery-container ${isVisible ? 'visible' : ''}`}>
          {certificates.map((certificate, index) => (
            <div
              className="gallery-item"
              key={certificate.id}
              style={{ animationDelay: `${0.2 * index}s` }}
              onClick={() => openModal(certificate)}
            >
              <div className="gallery-image">
                <img src={certificate.image} alt={certificate.title} />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{certificate.title}</h3>
                    <p>{certificate.description}</p>
                    <span className="view-btn">View Certificate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h3>{selectedImage.title}</h3>
            <img src={selectedImage.image} alt={selectedImage.title} />
            <p>{selectedImage.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
