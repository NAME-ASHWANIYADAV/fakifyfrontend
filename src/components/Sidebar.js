import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Sidebar.css';
import logo from '../assets/fakify-logo.png'; // Adjust the path to where your logo image is stored

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="logo-container">
                <img src={logo} alt="Fakify Logo" className="logo" />
                <h1 className="logo-name">Fakify</h1>
            </div>
            <ul>
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/how-it-works">How It Works</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default Sidebar;
