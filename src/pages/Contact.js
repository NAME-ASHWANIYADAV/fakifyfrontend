import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import '../styles/Contact.css';
import gif from '../assets/anime.gif';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://fakifybackend.onrender.com/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Form submitted successfully');
        // Reset form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
  };


    return (
      <div className="contact-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" onChange={handleChange} required  />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="send-btn" onSubmit={handleSubmit}  >Send Message</button>
          </form>
        </div>
        <div className="contact-gif">
          <img src={gif}alt="Contact GIF" />
        </div>
      </div>
    );
  };

export default Contact;
