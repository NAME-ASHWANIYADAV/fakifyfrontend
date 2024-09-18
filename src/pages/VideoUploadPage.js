// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/VideoUploadPage.css';

// const VideoUploadPage = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [status, setStatus] = useState('');
//   const [analysisType, setAnalysisType] = useState('spatial');  // Default to spatial analysis
//   const navigate = useNavigate();

//   const handleFileChange = (e) => {
//     setVideoFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!videoFile) {
//       alert('Please upload a video file.');
//       return;
//     }
  
//     setStatus('Processing...');
  
//     const formData = new FormData();
//     formData.append('video', videoFile);
//     formData.append('analysisType', analysisType);
  
//     try {
//       const response = await axios.post('http://localhost:5001/analyze', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
  
//       if (response.data.success) {
//         setStatus('Analyzing...');
//         // Redirect to /deep-fake-results with analysis results as state
//         navigate('/deep-fake-results', { state: { result: response.data.result, analysisType } });
//       } else {
//         setStatus('Error in analysis. Please try again.');
//       }
//     } catch (error) {
//       setStatus('Error during upload. Please try again.');
//     }
//   };
  
//   return (
//     <div className="video-upload-container">
//       <h2>Upload Video for Analysis</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="file-input">
//           <input type="file" accept="video/*" onChange={handleFileChange} required />
//         </div>
//         <div className="analysis-options">
//           <label>Select Analysis Type:</label>
//           <select value={analysisType} onChange={(e) => setAnalysisType(e.target.value)}>
//             <option value="spatial">Spatial Analysis</option>
//             <option value="audio-visual">Audio-Visual Inconsistencies</option>
//           </select>
//         </div>
//         <button type="submit">Submit</button>
//       </form>
//       {status && <p className="status">{status}</p>}
//     </div>
//   );
// };

// export default VideoUploadPage;

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



