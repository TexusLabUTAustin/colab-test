import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarHero.css';

const NavbarHero = () => {
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
        <nav className="navbar-hero">
            <div className="navbar-header-hero">
                <button className="navbar-toggle-hero" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
            <div className={`navbar-links-hero ${navbarOpen ? 'show-hero' : ''}`}>
                <button className="nav-button-hero" onClick={() => handleNavigation('/')}>Home</button>
                <button className="nav-button-hero" onClick={() => handleNavigation('/about')}>About</button>
                <button className="nav-button-hero" onClick={() => handleNavigation('/projects')}>Projects</button>
                <button className="nav-button-hero" onClick={() => handleNavigation('/contact')}>Contact</button>
            </div>
        </nav>
    );
};

export default NavbarHero;
