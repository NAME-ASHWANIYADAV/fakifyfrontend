// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://fakifybackend.onrender.com/api/auth/login', { email, password });
//       if (response.data.success) {
//         alert('Login Successful!');
//         // Redirect to dashboard or home page
//       } else {
//         alert('Invalid email or password.');
//       }
//     } catch (error) {
//       alert('Error during login. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        
//         <button type="submit">Login</button>
//       </form>
//       <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Login.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('https://fakifybackend.onrender.com/api/auth/login', { email, password });
//       if (response.data.success) {
//         alert('Login Successful!');
//         // Redirect to dashboard or home page
//       } else {
//         alert('Invalid email or password.');
//       }
//     } catch (error) {
//       alert('Error during login. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       {/* Background elements */}
      

//       <div className="login-box">
//         <h2 className='heading'> Fill the Form</h2>
//         <p>It only takes 30 seconds, start your Creatorpreneur journey.</p>
//         <form onSubmit={handleLogin}>
//           <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//           <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//           <button type="submit">Submit</button>
//         </form>
//         <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://fakifybackend.onrender.com/api/auth/login', { email, password });
      if (response.data.success) {
        alert('Login Successful!');
        // Redirect to /upload-video page
        navigate('/upload-video');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      alert('Error during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => navigate('/forgot-password')}>Forgot Password?</button>
    </div>
  );
};

export default Login;

