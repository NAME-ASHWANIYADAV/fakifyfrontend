import React from 'react';
import '../styles/NewsGrid.css';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';






const NewsGrid = () => {
    return (
        <div className="photo-column-grid">
          <div className="photo-item">
            <img src={img1} alt="Photo 1" />
          </div>
          <div className="photo-item">
            <img src={img2} alt="Photo 2" />
          </div>
        </div>
      );
    };


export default NewsGrid;
