import React from "react";
import { NavLink } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = () =>{
    return(
        <section className="hero-section">
            <h1>Authenticate Deep Fake Videos with Confidence</h1>
            <p>Our advanced AI-powered tool helps you detect face-swap deep fakes with precision.</p>
            <NavLink to="/login" className="cta-button">Upload Video for Analysis</NavLink>
        </section>
    );
};

export default HeroSection;
