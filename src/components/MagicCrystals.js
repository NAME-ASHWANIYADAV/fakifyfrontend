import React, { useEffect } from 'react';
import '../styles/MagicCrystals.css'

const MagicCrystals = () => {
  useEffect(() => {
    // Function to create a sparkle at the mouse position
    function createSparkle(x, y) {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      document.body.appendChild(sparkle);

      // Remove sparkle after animation completes
      setTimeout(() => {
        sparkle.remove();
      }, 1500); // 1.5s matches the animation duration
    }

    // Listen for mouse movements
    const handleMouseMove = (e) => {
      createSparkle(e.pageX - 5, e.pageY - 5); // Offset to center the sparkle
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return null; // This component doesn't render anything itself
};

export default MagicCrystals;