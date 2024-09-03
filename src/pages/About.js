import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/About.css';

const About = () => {
  const goals = [
    "Goal 1: Improve Customer Experience",
    "Goal 2: Enhance Product Quality",
    "Goal 3: Expand Global Reach",
    "Goal 4: Increase Sustainability",
    "Goal 5: Foster Innovation",
    "Goal 6: Strengthen Partnerships",
  ];

  return (
    <div className="about-us-container">
        
      <div className="goal-box">
        <h3>Growth</h3>
        <p>Innovation led strategy</p>
        <p>Get high-quality product with sustainable and digital brand building.</p>
      </div>
      <div className="goal-box">
        <h3>Efficiency</h3>
        <p>Streamline operations</p>
        <p>Optimize your processes to achieve maximum productivity.</p>
      </div>
      <div className="goal-box">
        <h3>Innovation</h3>
        <p>Lead the market</p>
        <p>Develop innovative solutions that give you a competitive edge.</p>
      </div>
      <div className="goal-box">
        <h3>Innovation</h3>
        <p>Lead the market</p>
        <p>Develop innovative solutions that give you a competitive edge.</p>
      </div>
      <div className="goal-box">
        <h3>Innovation</h3>
        <p>Lead the market</p>
        <p>Develop innovative solutions that give you a competitive edge.</p>
      </div>
      <div className="goal-box">
        <h3>Innovation</h3>
        <p>Lead the market</p>
        <p>Develop innovative solutions that give you a competitive edge.</p>
      </div>
      {/* Add more boxes as needed */}
    </div>
  );
};

export default About;
