import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUp.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/signup', { name, email, password, question, answer });
      alert('Sign Up Successful! Please log in.');
    } catch (error) {
      alert('Error during sign up. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          autoComplete="name"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
        />
        <select value={question} onChange={(e) => setQuestion(e.target.value)} required>
          <option value="">Select a security question</option>
          <option value="What is your mother's  name?">What is your mother's  name?</option>
          <option value="What was your first pet's name?">What was your first pet's name?</option>
          <option value="What was the model of your first car?">What was the model of your first car?</option>
          <option value="Where did you go to high school?">Where did you go to high school?</option>
        </select>
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          required
          autoComplete="off"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;


