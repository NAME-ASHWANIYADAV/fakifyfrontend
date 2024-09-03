import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="/documentation" className="footer-link">Documentation</a>
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="/contact" className="footer-link">Contact</a>
      </div>
      <div className="footer-credits">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
