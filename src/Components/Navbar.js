import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const navigate = useNavigate();

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setNavbarOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
            <div className={`navbar-links ${navbarOpen ? 'show' : ''}`}>
                <button className="nav-button" onClick={() => handleNavigation('/')}>Home</button>
                <button className="nav-button" onClick={() => handleNavigation('/about')}>About</button>
                <button className="nav-button" onClick={() => handleNavigation('/projects')}>Projects</button>
                <button className="nav-button" onClick={() => handleNavigation('/contact')}>Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;
