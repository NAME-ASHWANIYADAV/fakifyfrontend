import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Fakify</div>
            <div className="auth-buttons">
                <NavLink to="/Login" className="login-btn">Login</NavLink>
                <NavLink to="/SignUp" className="signup-btn">Sign Up</NavLink>
            </div>
        </header>
    );
};

export default Header;

