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
          <h2>Convolutional Neural Networks (CNNs)</h2>
          <p>CNNs can be trained to detect inconsistencies in facial features, expressions, and movements. CNNs can also analyse video frames over time to identify unnatural transitions and discrepancies..</p>
        </div>
        <img src={photu} alt="Research" className="timeline-image" />
      </div>

      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>RNN AND LSTM</h2>
          <p>RNNs and LSTMs can be used to analyse the sequence of frames in a video to detect temporal anomalies and inconsistencies indicative of deep fakes.</p>
        </div>
      </div>
      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Generative Adversarial Networks (GANs)</h2>
          <p>generate deep fakes and simultaneously training another model to detect them improving the robustness of detection algorithms.</p>
        </div>
      </div>
      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Audio-Visual Inconsistencies</h2>
          <p> Combining audio and visual analysis can also help detect deep fakes by identifying mismatches between lip movements and speech, or inconsistencies in ambient sounds.</p>
        </div>
      </div>
      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Biometric Verification</h2>
          <p>Analysing subtle behavioural traits such as micro-expressions, eye and head movement to detect anomalies. </p>
        </div>
      </div>

      <div className="timeline-item">
        <img src={photu} alt="Planning" className="timeline-image" />
        <div className="timeline-content">
          <h2>Blockchain Technology</h2>
          <p>Using blockchain to create immutable records of media, providing a verifiable chain of custody for digital content to ensure its authenticity. vii.Frequency Analysis: Analysing the frequency domain of images and videos to detect anomalies and artefacts introduced during the deep fake creation process. </p>
        </div>
      </div>
      {/* Add more timeline items as needed */}
    </div>
  );
};

export default HowItWorks;
