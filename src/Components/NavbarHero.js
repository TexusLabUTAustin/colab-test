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
                <div className="navbar-content">
                    <div className="navbar-left">
                        <img src={`${process.env.PUBLIC_URL}/images/colablogo_icon.png`} alt="Logo" className="navbar-icon" />
                        <h1 className="navbar-title">UT-City Climate Colab</h1>
                    </div>
                    <div className='navbarbtn'>
                        <button className="navbar-toggle-hero" onClick={toggleNavbar} aria-label="Toggle navigation">
                            ☰
                        </button>
                    </div>
                </div>
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
