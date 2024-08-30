import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/VideoUploadPage.css';

const VideoUploadPage = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [status, setStatus] = useState('');
  const [analysisType, setAnalysisType] = useState('spatial');
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
    formData.append('analysisType', analysisType);

    try {
      const response = await axios.post('https://fakifybackend.onrender.com/api/videoupload-video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        setStatus('Analyzing...');
        // Navigate to the Deep Fake Detection Results Page with the response data
        navigate('/deep-fake-results', { state: response.data });
      } else {
        setStatus('Error in analysis. Please try again.');
      }
    } catch (error) {
      setStatus('Error during upload. Please try again.');
    }
  };

  return (
    <div className="video-upload-container">
      <h2>Upload Video for Analysis</h2>
      <form onSubmit={handleSubmit}>
        <div className="file-input">
          <input type="file" accept="video/*" onChange={handleFileChange} required />
        </div>
        <div className="analysis-options">
          <label>Select Analysis Type:</label>
          <select value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
            <option value="spatial">Spatial Analysis</option>
            <option value="audio-visual">Audio-Visual Inconsistencies</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {status && <p className="status">{status}</p>}
    </div>
  );
};

export default VideoUploadPage;
