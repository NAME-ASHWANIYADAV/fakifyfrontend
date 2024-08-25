import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import FeaturesOverview from '../components/FeaturesOverView';
import Footer from '../components/Footer';
import '../styles/Home.css';
import topgirl from '../assets/topgirl.png';
import img1 from '../assets/image1.png'; // Add your image paths
import img2 from '../assets/image2.png';
import img3 from '../assets/image3.png';
import img4 from '../assets/image4.png';
import gif from "../assets/deepfakevsrl.gif";

const Home = () => {
  const images = [img1, img2, img3, img4]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0); // State to track current image index

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  // Styles for layout and alignment
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };

  const heroSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    maxWidth: '1200px',
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

  const subtitleStyle = {
    fontSize: '2rem',
    marginTop: '20px',
    color: '#ddd',
  };

  const sliderContainerStyle = {
    display: 'flex',
    overflow: 'hidden', // Hide overflowing content
    height: '700px',
    width: '100%',
    maxWidth: '1200px',
    margin: '20px 0',
    position: 'relative', // For positioning dots
    
  };
  
  const sliderImageStyle = {
    flex: '0 0 100%', // Make sure each image takes up full width of container
    width: '100%', // Set width to 100% of the container
    height: '600px', // Maintain aspect ratio
    transition: 'transform 0.5s ease-in-out', // Smooth transition for sliding effect
    objectFit: 'cover', // Fit the image within the container without distortion
  };

  const dotContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: '-30px', // Position dots below images
    width: '100%',
  };

  const dotStyle = (isActive) => ({
    height: '12px',
    width: '12px',
    margin: '0 5px',
    backgroundColor: isActive ? '#fff' : '#bbb', // Glow effect when active
    borderRadius: '50%',
    display: 'inline-block',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease', // Smooth transition for dot color
  });

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
      
      {/* Add "Try Now" heading */}
      <h2 style={{ textAlign: 'center', color: '#fff', margin: '40px 0 20px' }}>Try Now</h2>

      <div className='try_now'>
        <div className='imageSection'>
          <img src={gif} alt="gif" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
        </div>
      
        <div className='featuresOverview'>
          <FeaturesOverview />
        </div>
      </div>
      
      {/* Image Slider with Dots */}
      <div style={sliderContainerStyle}>
        <div style={{ display: 'flex', transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} style={sliderImageStyle} />
          ))}
        </div>
        <div style={dotContainerStyle}>
          {images.map((_, index) => (
            <span
              key={index}
              style={dotStyle(index === currentIndex)}
              onClick={() => setCurrentIndex(index)} // Manually set current image on dot click
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;