import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/deepFakeResultPage.css';

const DeepFakeResultsPage = () => {
  const location = useLocation();
  const { videoUrl, report, probabilityScore } = location.state || {};

  // Ensure all necessary data is present
  if (!videoUrl || !report || typeof probabilityScore === 'undefined') {
    return <div>Loading or insufficient data to display results.</div>;
  }

  return (
    <div className="results-container">
      <h2>Deep Fake Detection Results</h2>
      <div className="video-preview">
        <video src={videoUrl} controls />
      </div>
      <div className="report">
        <h3>Summary</h3>
        <p>{report.summary || 'No summary available'}</p>

        <h3>Inconsistencies Detected</h3>
        {report.inconsistencies && report.inconsistencies.length > 0 ? (
          <ul>
            {report.inconsistencies.map((inc, index) => (
              <li key={index}>{inc}</li>
            ))}
          </ul>
        ) : (
          <p>No major inconsistencies detected.</p>
        )}

        <h3>Technical Analysis</h3>
        <p>{report.technicalAnalysis || 'No technical analysis available'}</p>

        <h3>Probability Score</h3>
        <p>{(probabilityScore * 100).toFixed(2)}%</p>
      </div>

      <button className="download-btn" onClick={() => alert('Download PDF functionality is not implemented yet!')}>Download PDF Report</button>
      <button className="share-btn" onClick={() => alert('Share functionality is not implemented yet!')}>Share Results</button>
    </div>
  );
};

export default DeepFakeResultsPage;
