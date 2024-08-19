import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/deepFakeResultPage.css';

const DeepFakeResultsPage = () => {
  const location = useLocation();
  const { videoUrl, report, probabilityScore } = location.state;

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
