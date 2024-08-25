import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import FeaturesOverview from '../components/FeaturesOverView';
import Footer from '../components/Footer';
import '../styles/Home.css';
import topgirl from '../assets/topgirl.png';

const Home = () => {
  // Styles for layout and alignment
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#000', // black background
    color: '#fff', // white text color for better contrast
    textAlign: 'center',
    padding: '20px',
    
  };

  const heroSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1200px', // Limit the max width of content
    margin: '0 auto',
  };

  const textSectionStyle = {
    flex: 1,
    color: '#fff',
  };

  const imageSectionStyle = {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const titleStyle = {
    color: 'red',
    fontSize: '6rem',
    fontWeight: 'bold',
    margin: 0,
  };

  const subtitleStyle = {
    fontSize: '2rem',
    marginTop: '20px',
    color: '#ddd',
  };

  return (
    <div style={containerStyle}>
      <Header />
      <Sidebar />
      <main className="main-content" style={heroSectionStyle}>
        {/* Hero Section */}
        <div style={textSectionStyle}>
          <h1 className='main-text' >STATES OF DEEPFAKES</h1>
          <p style={subtitleStyle}>Realities, Threats, and Impact</p>
        </div>
        <div style={imageSectionStyle}>
          <img src={topgirl} alt="Top Girl" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
        </div>
      </main>
      <FeaturesOverview />
      <div className=''>

      </div>
      <Footer />
    </div>
  );
};

export default Home;