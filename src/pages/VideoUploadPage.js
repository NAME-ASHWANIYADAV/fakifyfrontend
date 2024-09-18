import React, { useState } from 'react';
import axios from 'axios';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!videoFile) {
      alert('Please upload a video file.');
      return;
    }

    setStatus('Processing...');

    const formData = new FormData();
    formData.append('video', videoFile);

    try {
      const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.status === 200) {
        setStatus('Analyzing...');
        const probabilityScore = response.data.audio_fakeness_percentage;

        // Debug log to verify the response data
        console.log('Prediction Response:', response.data);

        // Redirect to /deep-fake-results with analysis results as state
        navigate('/deep-fake-results', { 
          state: { 
            videoUrl: URL.createObjectURL(videoFile), 
            report: { 
              summary: 'Audio analysis report generated.', 
              inconsistencies: [],  // Placeholder
              technicalAnalysis: 'Detailed analysis to be added later.'
            }, 
            probabilityScore 
          } 
        });
      } else {
        setStatus('Error in analysis. Please try again later.');
      }
    } catch (error) {
      console.error('Error during analysis:', error);
      setStatus('Error in analysis. Please try again later.');
    }
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
