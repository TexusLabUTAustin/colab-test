import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen(!navbarOpen);
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-header">
            
                <button className="navbar-toggle" onClick={toggleNavbar}>
                    ☰
                </button>
            </div>
            <ul className={`navbar-links ${navbarOpen ? 'show' : ''}`}>
                <li className="nav-item">
                    <Link to="/" onClick={toggleNavbar}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" onClick={toggleNavbar}>About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/projects" onClick={toggleNavbar}>Projects</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" onClick={toggleNavbar}>Contact</Link>
                </li>
                {/*
                <li className="nav-item dropdown" onClick={toggleDropdown}>
                    More
                    <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                        <li className="dropdown-item">
                            <Link to="/action1" onClick={toggleNavbar}>Action 1</Link>
                        </li>
                        <li className="dropdown-item">
                            <Link to="/action2" onClick={toggleNavbar}>Action 2</Link>
                        </li>
                        <li className="dropdown-item">
                            <Link to="/action3" onClick={toggleNavbar}>Action 3</Link>
                        </li>
                    </ul>
                </li>
                */}
            </ul>
        </nav>
    );
};

export default Navbar;
