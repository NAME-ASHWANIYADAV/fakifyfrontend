import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import VideoPlayer from '../components/VideoPlayer';
import HeroSection from '../components/HeroSection';
import FeaturesOverview from '../components/FeaturesOverView';
import Footer from '../components/Footer';
import '../styles/Home.css';
import HowItWorks from '../pages/HowItWorks'

import MagicCrystals from '../components/MagicCrystals';
import About from './About';
import Contact from './Contact';


function Home(){
return (
  <div className="Home">
     <div className='HeroSection'><HeroSection/></div>
     <About/>

     <div className='VideoPlayer'><VideoPlayer/></div>
     <HowItWorks />
     <Contact/>
     <MagicCrystals/>
     
    
</div>

);
}

export default Home;