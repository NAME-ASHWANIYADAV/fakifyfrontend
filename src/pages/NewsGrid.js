import React from 'react';
import './NewsGrid.css';

const newsData = [
  { id: 1, src: 'image1.jpg', alt: 'News Image 1' },
  { id: 2, src: 'image2.jpg', alt: 'News Image 2' },
  { id: 3, src: 'image3.jpg', alt: 'News Image 3' },
  { id: 4, src: 'image4.jpg', alt: 'News Image 4' },
  { id: 5, src: 'image5.jpg', alt: 'News Image 5' },
  { id: 6, src: 'image6.jpg', alt: 'News Image 6' },
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
