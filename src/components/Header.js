import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo.jpg';

const Header = () => {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo} className='img' alt="DeFake Logo"/>
          <h1>DeFake.ai</h1>
        </div>
        <nav className="navbar">
          <div className="navbar-item"><NavLink to="/" exact="true">Home</NavLink></div>
          <div className="navbar-item"><NavLink to="/about">About</NavLink></div>
          <div className="navbar-item-active" ><NavLink to="/how-it-works">How It Works</NavLink></div>
          <div className="navbar-item"><NavLink to="/contact">Contact</NavLink></div>
        </nav>
        <div className='auth-buttons'>
          {/* NavLink to login and signup pages */}
          <NavLink to="/login" className="login">Login</NavLink>
          <NavLink to="/signup" className="login">Signup</NavLink>
        </div>
      </header>
    );
};

export default Header;




// <li  className="navbar-item"><NavLink to="/" exact>Home</NavLink></li>
//                 <li className="navbar-item"><NavLink to="/about">About</NavLink></li>
//                 <li  className="navbar-item active"><NavLink to="/how-it-works">How It Works</NavLink></li>
//                 <li  className="navbar-item"><NavLink to="/contact">Contact</NavLink></li>
