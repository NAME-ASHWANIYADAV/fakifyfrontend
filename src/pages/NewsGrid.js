import React from 'react';
import '../styles/NewsGrid.css';

import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';


const newsData = [
  { id: 1, src: {img1}, alt: 'News Image 1' },
  { id: 2, src: {img2}, alt: 'News Image 2' },
  { id: 3, src: {img1}, alt: 'News Image 3' },
  { id: 4, src: {img1}, alt: 'News Image 4' },
  { id: 5, src: {img1}, alt: 'News Image 5' },
  { id: 6, src: {img1}, alt: 'News Image 6' },
];

const NewsGrid = () => {
  return (
    <div className="news-grid">
      {newsData.map((news) => (
        <div key={news.id} className="news-item">
          <img src={news.src} alt={news.alt} />
        </div>
      ))}
    </div>
  );
};

export default NewsGrid;
