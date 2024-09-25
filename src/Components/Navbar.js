import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img src={`${process.env.PUBLIC_URL}/images/colablogo_icon.png`} alt="Logo" />
                </Link>
                <p>UT-City Climate CoLab</p>
            </div>
            <div className="navbar-buttons">
                <Link to="/about">
                    <button className="navbar-button">About</button>
                </Link>
                <Link to="/projects">
                    <button className="navbar-button">Projects</button>
                </Link>
                <Link to="/contact">
                    <button className="navbar-button">Contact</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
