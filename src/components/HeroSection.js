import React from 'react';
import '../styles/HeroSection.css';
import left from '../assets/lefthero.png';
import right from '../assets/righthero.png';
import { NavLink } from 'react-router-dom';
import gifi from '../assets/need.gif';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="left">
        <img src={left} className='hero-img' alt="Left Hero" />
      </div>
      <div className="hero-text">
        <h1>We protect authenticity. <br /> Safeguard your <span className="highlight">digital truth</span></h1>
        <div className="email-subscribe">
          <input type="email" placeholder="name@email.com" />
          <NavLink to="/login" className="cta-button">Upload Video for Analysis</NavLink>
        </div>
      </div>
      <div className="right-container">
        <img src={right} className='hero-img' alt="Right Hero" />
        <img src={gifi} className='hero-img' alt="Gifi Hero" />
      </div>
    </section>
  );
};

export default HeroSection;


