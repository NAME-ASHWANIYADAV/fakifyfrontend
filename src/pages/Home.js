import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import FeaturesOverview from '../components/FeaturesOverView';
import Footer from '../components/Footer';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Sidebar />
      <main className="main-content">
        <HeroSection />
        <FeaturesOverview />
      </main>
      
    </div>
  );
};

export default Home;

