import React from 'react';
import Header from '../components/Header';

import Footer from '../components/Footer';
import '../styles/HowItWorks.css';
import photu from '../assets/howitworks.jpg';

const HowItWorks = () => {
  return (
    <div className="timeline-container">
      <div className="timeline-item">
        <div className="timeline-content">
          <h2>Step 1: Research</h2>
          <p>Understand the requirements and gather all necessary information to create a roadmap.</p>
        </div>
        <img src={photu} alt="Research" className="timeline-image" />
      </div>

      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Step 2: Planning</h2>
          <p>Create a detailed plan for the project, including timelines, resources, and deliverables.</p>
        </div>
      </div>
      <div className="timeline-item">
        <img src="/public/howitworks.webp" alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Step 2: Planning</h2>
          <p>Create a detailed plan for the project, including timelines, resources, and deliverables.</p>
        </div>
      </div>
      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Step 2: Planning</h2>
          <p>Create a detailed plan for the project, including timelines, resources, and deliverables.</p>
        </div>
      </div>

      {/* Add more timeline items as needed */}
    </div>
  );
};

export default HowItWorks;
