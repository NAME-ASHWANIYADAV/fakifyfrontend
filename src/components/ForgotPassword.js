import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [answer, setAnswer] = useState('');
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();

  const handleVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakifybackend.onrender.com/api/auth/verify-question', { email, answer });
      if (response.data.success) {
        navigate('/reset-password', { state: { email } });
      } else {
        alert('Incorrect answer. Please try again.');
      }
    } catch (error) {
      alert('Error during verification. Please try again.');
    }
  };

  const fetchSecurityQuestion = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakifybackend.onrender.com/api/auth/get-security-question', { email });
      setQuestion(response.data.question);
    } catch (error) {
      alert('Error fetching security question. Please try again.');
    }
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={fetchSecurityQuestion}>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Get Security Question</button>
      </form>
      {question && (
        <form onSubmit={handleVerification}>
          <p>{question}</p>
          <input type="text" placeholder="Answer" value={answer} onChange={(e) => setAnswer(e.target.value)} required />
          <button type="submit">Verify Answer</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
