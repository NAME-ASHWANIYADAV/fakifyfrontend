import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import ig1 from '../assets/2.png';

const Header = () => {
    return (
        <header className="header">
             <div>
             <img src={ig1} alt="logo"className="logo-image" />
             
            <div className="logo">Fakify</div>
            </div>
            <div className="auth-buttons">
                <NavLink to="/Login" className="login-btn">Login</NavLink>
                <NavLink to="/SignUp" className="signup-btn">Sign Up</NavLink>
            </div>
        </header>
    );
};

export default Header;

