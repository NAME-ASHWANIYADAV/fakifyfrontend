// import React from 'react';
// import { useLocation } from 'react-router-dom';
// import '../styles/deepFakeResultPage.css';

// const DeepFakeResultsPage = () => {
//   const location = useLocation();
//   const { videoUrl, report, probabilityScore } = location.state;

//   return (
//     <div className="results-container">
//       <h2>Deep Fake Detection Results</h2>
//       <div className="video-preview">
//         <video src={videoUrl} controls />
//       </div>
//       <div className="report">
//         <h3>Summary</h3>
//         <p>{report.summary}</p>
//         <h3>Inconsistencies Detected</h3>
//         <ul>
//           {report.inconsistencies.map((inc, index) => (
//             <li key={index}>{inc}</li>
//           ))}
//         </ul>
//         <h3>Technical Analysis</h3>
//         <p>{report.technicalAnalysis}</p>
//         <h3>Probability Score</h3>
//         <p>{probabilityScore}%</p>
//       </div>
//       <button className="download-btn">Download PDF Report</button>
//       <button className="share-btn">Share Results</button>
//     </div>
//   );
// };

// export default DeepFakeResultsPage;
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/deepFakeResultPage.css';

const DeepFakeResultsPage = () => {
  const location = useLocation();
  
  // Simulate data if location.state is not available
  const defaultData = {
    videoUrl: 'path/to/your/sample/video.mp4',
    report: {
      summary: 'This is a summary of the deep fake analysis.',
      inconsistencies: [
        'Facial movements are unnatural in frame 123.',
        'Lighting inconsistency detected in frame 456.',
        'Lip synchronization issue detected in frame 789.',
      ],
      technicalAnalysis: 'The video shows multiple signs of deep fake manipulation, including unnatural facial expressions and lighting inconsistencies. The probability of this video being a deep fake is high.',
    },
    probabilityScore: 87, // Example score
  };

  // Use either the real data from location.state or the default data
  const { videoUrl, report, probabilityScore } = location.state || defaultData;

  return (
    <div className="results-container">
      <h2>Deep Fake Detection Results</h2>
      <div className="video-preview">
        <video src={videoUrl} controls />
      </div>
      <div className="report">
        <h3>Summary</h3>
        <p>{report.summary}</p>
        <h3>Inconsistencies Detected</h3>
        <ul>
          {report.inconsistencies.map((inc, index) => (
            <li key={index}>{inc}</li>
          ))}
        </ul>
        <h3>Technical Analysis</h3>
        <p>{report.technicalAnalysis}</p>
        <h3>Probability Score</h3>
        <p>{probabilityScore}%</p>
      </div>
      <button className="download-btn">Download PDF Report</button>
      <button className="share-btn">Share Results</button>
    </div>
  );
};

export default DeepFakeResultsPage;

