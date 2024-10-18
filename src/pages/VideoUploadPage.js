import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoUploadPage.css';

const VideoUploadPage = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [status, setStatus] = useState('');
  const [analysisType, setAnalysisType] = useState('audio-visual');  // Default to audio-visual analysis
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!videoFile) {
      alert('Please upload a video file.');
      return;
    }

    setStatus('Processing...');

    // Simulate successful backend response
    setTimeout(() => {
      setStatus('Analyzing...');

      // Static probability score and report for now
      const probabilityScore = 0.75;  // Simulate a 75% deepfake probability score
      const report = {
        summary: 'Static audio analysis report generated.',
        inconsistencies: ['Lip sync mismatch', 'Voice modulation detected'],
        technicalAnalysis: 'This is a static technical analysis with no real-time backend data.'
      };

      // Navigate to results page with static data
      navigate('/deep-fake-results', {
        state: {
          videoUrl: URL.createObjectURL(videoFile), // The uploaded video
          report,
          probabilityScore
        }
      });
    }, 2000); // Simulate 2-second delay for "processing"
  };

  return (
    <div className="upload-container">
      <h1>Upload a Video for DeepFake Detection</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="video/*" onChange={handleFileChange} required />
        <button type="submit">Upload and Analyze</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default VideoUploadPage;
