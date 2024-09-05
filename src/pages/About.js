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
        <h3>Deepfake Pornography:</h3>
        <p>60% of deepfake content online is pornographic, causing severe privacy violations.</p>
      </div>

      <div className="goal-box">
        <h3>Identity Fraud:</h3>
        <p>Deepfakes used for impersonation, leading to financial loss and ruined lives.</p>
      </div>

      <div className="goal-box">
        <h3>Political Manipulation:</h3>
        <p>Misinformation through deepfakes threatens democracy and national security.</p>
      </div>

      <div className="goal-box">
        <h3>Blackmail and Extortion:</h3>
        <p>Victims coerced by fake videos, leading to financial and emotional damage.</p>
      </div>

      <div className="goal-box">
        <h3>Combat Cybercrime Targeting Women:</h3>
        <p>Protect yourself online by understanding the tactics used by cybercriminals.</p>
        <p>Learn about safe online practices and take steps to enhance your digital security.</p>
      </div>

      {/* Add more boxes as needed */}
    </div>
  );
};

export default About;
