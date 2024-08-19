import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about">
      <Header />
      <Sidebar />
      <section className="intro">
        <h1>About Us</h1>
        <p>In today's digital age, the proliferation of synthetically-generated media—particularly deep fakes—poses significant challenges. Deep fakes, which leverage advanced AI and ML techniques to manipulate audio and video content, can undermine trust, commit fraud, spread disinformation, and even defame individuals. Addressing these challenges requires innovative solutions that combine the latest advancements in technology with rigorous forensic techniques.</p>
      </section>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>Our mission is to develop a robust AI/ML-based solution for authenticating face-swap deep fake videos. By leveraging state-of-the-art technologies and methodologies, we aim to provide a comprehensive tool that not only identifies deep fakes but also offers detailed insights into their creation and underlying techniques. Our solution is designed to help security agencies, media organizations, and individuals combat the growing threat of deep fakes and ensure the authenticity of digital content.</p>
      </section>
      
      <section className="approach">
        <h2>Our Approach</h2>
        <ul>
          <li><strong>Convolutional Neural Networks (CNNs):</strong> We utilize CNNs to detect inconsistencies in facial features, expressions, and movements. By analyzing video frames over time, our system identifies unnatural transitions and discrepancies indicative of deep fakes.</li>
          <li><strong>Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) Networks:</strong> Our approach includes RNNs and LSTMs to examine the sequence of video frames for temporal anomalies and inconsistencies, enhancing our detection capabilities.</li>
          <li><strong>Capsule Networks:</strong> By applying capsule networks, we can identify discrepancies in facial pose and texture, further improving our accuracy in detecting manipulated content.</li>
          <li><strong>Adversarial Training:</strong> We employ adversarial training techniques, using Generative Adversarial Networks (GANs) to generate deep fakes and simultaneously train our detection models, making them more robust against evolving threats.</li>
          <li><strong>Audio-Visual Inconsistencies:</strong> Our solution combines audio and visual analysis to detect mismatches between lip movements and speech, as well as inconsistencies in ambient sounds.</li>
          <li><strong>Blockchain Technology:</strong> To ensure the authenticity of digital content, we use blockchain to create immutable records, providing a verifiable chain of custody.</li>
          <li><strong>Frequency Analysis:</strong> We analyze the frequency domain of images and videos to uncover anomalies and artifacts introduced during the deep fake creation process.</li>
          <li><strong>Biometric Verification:</strong> Our system examines subtle behavioral traits, such as micro-expressions and eye movements, to detect anomalies indicative of deep fakes.</li>
          <li><strong>Hybrid Models:</strong> We integrate spatial, temporal, audio, and frequency analysis into a hybrid model to enhance the robustness and accuracy of our detection methods.</li>
        </ul>
      </section>
      
      <section className="solution">
        <h2>Our Solution</h2>
        <p>Our solution provides detailed reports on suspected deep fake videos, offering insights into various characteristics, including whether the content is confirmed fake and the specific abnormalities observed. We also detail the mathematical techniques underlying the creation of deep fakes, empowering users with knowledge to better understand and address this evolving threat.</p>
      </section>
      
      
    </div>
  );
};

export default About;
