import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/HowItWorks.css';

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <Header />
      <Sidebar />
      <main className="main-content">
        <h1>How It Works</h1>
        <p>
          Our deep fake detection technology employs a multi-faceted approach to identify and authenticate face-swap deep fake videos. Here’s a breakdown of how our system works:
        </p>

        <section className="section">
          <h2>1. Convolutional Neural Networks (CNNs)</h2>
          <p>
            We use CNNs to analyze facial features, expressions, and movements. By examining each video frame, our system detects inconsistencies and unnatural transitions that may indicate the presence of a deep fake.
          </p>
        </section>

        <section className="section">
          <h2>2. Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) Networks</h2>
          <p>
            RNNs and LSTMs are employed to analyze the temporal sequence of video frames. This helps us identify anomalies and inconsistencies over time, enhancing our ability to detect sophisticated deep fakes that might exhibit subtle temporal irregularities.
          </p>
        </section>

        <section className="section">
          <h2>3. Capsule Networks</h2>
          <p>
            Capsule networks are used to detect discrepancies in facial pose and texture. They help in understanding complex spatial hierarchies and identifying subtle distortions that traditional neural networks might miss.
          </p>
        </section>

        <section className="section">
          <h2>4. Adversarial Training</h2>
          <p>
            Adversarial training involves using Generative Adversarial Networks (GANs) to produce deep fakes and train our detection models simultaneously. This method improves the robustness of our algorithms by exposing them to a variety of deep fake techniques and counteracting them effectively.
          </p>
        </section>

        <section className="section">
          <h2>5. Audio-Visual Inconsistencies</h2>
          <p>
            By integrating audio analysis with visual analysis, we can detect mismatches between lip movements and speech, as well as inconsistencies in ambient sounds. This multi-modal approach enhances our ability to identify deep fakes that may not be apparent through visual analysis alone.
          </p>
        </section>

        <section className="section">
          <h2>6. Blockchain Technology</h2>
          <p>
            We use blockchain technology to create immutable records of digital content. This provides a verifiable chain of custody and helps in ensuring the authenticity of media by preventing unauthorized modifications.
          </p>
        </section>

        <section className="section">
          <h2>7. Frequency Analysis</h2>
          <p>
            Frequency analysis is applied to detect anomalies and artifacts in the frequency domain of images and videos. This technique helps uncover subtle alterations introduced during the creation of deep fakes.
          </p>
        </section>

        <section className="section">
          <h2>8. Biometric Verification</h2>
          <p>
            Our system also examines subtle behavioral traits, such as micro-expressions and eye movements. These biometric indicators are difficult to replicate accurately in deep fakes, making them a valuable tool for detection.
          </p>
        </section>

        <section className="section">
          <h2>9. Hybrid Models</h2>
          <p>
            We integrate various analytical approaches, including spatial, temporal, audio, and frequency analysis, into hybrid models. This comprehensive method enhances the overall robustness and accuracy of our deep fake detection capabilities.
          </p>
        </section>

        <section className="section">
          <h2>Detailed Reporting</h2>
          <p>
            Once a video is analyzed, our system generates a detailed report outlining the characteristics of the deep fake, including the presence of any abnormalities and the mathematical techniques used in its creation. This report provides valuable insights for understanding and addressing deep fakes.
          </p>
        </section>
      </main>
    </div>
  );
};

export default HowItWorks;
